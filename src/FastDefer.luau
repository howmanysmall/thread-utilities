--!native
--!optimize 2
--!strict

local freeThreads: {thread} = table.create(500)
local function RunFunction<Arguments...>(callback: (Arguments...) -> (), thread: thread, ...: Arguments...): ()
	callback(...)
	table.insert(freeThreads, thread)
end

local function Yield(): ()
	while true do
		RunFunction(coroutine.yield())
	end
end

--[=[
	Defers a function call in a much more performant manner than `task.defer`.

	:::warning Erroring
	This function can sometimes throw some weird error about lifecycle or
	something. If you're seeing that, I'd just go back to `task.defer`.
	:::

	@function FastDefer
	@within ThreadUtilities

	@param callback (Arguments...) -> () -- The function to spawn.
	@param ... Arguments... -- The arguments to the function.
	@return thread
]=]
local function FastDefer<Arguments...>(callback: (Arguments...) -> (), ...: Arguments...): thread
	local thread: thread
	local freeAmount = #freeThreads

	if freeAmount > 0 then
		thread = freeThreads[freeAmount]
		freeThreads[freeAmount] = nil
	else
		thread = coroutine.create(Yield)
		coroutine.resume(thread)
	end

	-- TODO: This might be able to throw?
	return task.defer(thread, callback, thread, ...)
end

return FastDefer
