--!optimize 2
--!strict

local FastDefer = require(script.FastDefer)
local FastDeferSafe = require(script.FastDeferSafe)
local FastDelay = require(script.FastDelay)
local FastDelaySafe = require(script.FastDelaySafe)
local FastSpawn = require(script.FastSpawn)
local NoYield = require(script.NoYield)
local SafeThreadCancel = require(script.SafeThreadCancel)

--[=[
	Provides utilities for working with threads.

	@class ThreadUtilities
]=]
local ThreadUtilities = table.freeze({
	FastDefer = FastDefer;
	FastDeferSafe = FastDeferSafe;
	FastDelay = FastDelay;
	FastDelaySafe = FastDelaySafe;
	FastSpawn = FastSpawn;
	NoYield = NoYield;
	SafeThreadCancel = SafeThreadCancel;
})

return ThreadUtilities
