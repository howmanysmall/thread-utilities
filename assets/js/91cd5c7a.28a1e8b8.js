"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[704],{4468:e=>{e.exports=JSON.parse('{"functions":[{"name":"FastDelay","desc":"Delays a function call in a much more performant manner than `task.delay`.\\n\\n:::warning Erroring\\nThis function can sometimes throw some weird error about lifecycle or\\nsomething. If you\'re seeing that, I\'d just go back to `task.delay`.\\n:::","params":[{"name":"delay","desc":"The delay before the function is executed.","lua_type":"number"},{"name":"callback","desc":"The function to spawn.","lua_type":"(Arguments...) -> ()"},{"name":"...","desc":"The arguments to the function.","lua_type":"Arguments..."}],"returns":[{"desc":"","lua_type":"thread"}],"function_type":"static","source":{"line":33,"path":"src/FastDelay.luau"}},{"name":"FastDefer","desc":"Defers a function call in a much more performant manner than `task.defer`.\\n\\n:::warning Erroring\\nThis function can sometimes throw some weird error about lifecycle or\\nsomething. If you\'re seeing that, I\'d just go back to `task.defer`.\\n:::","params":[{"name":"callback","desc":"The function to spawn.","lua_type":"(Arguments...) -> ()"},{"name":"...","desc":"The arguments to the function.","lua_type":"Arguments..."}],"returns":[{"desc":"","lua_type":"thread"}],"function_type":"static","source":{"line":32,"path":"src/FastDefer.luau"}},{"name":"FastDeferSafe","desc":"Defers a function call in a much more performant manner than `task.defer`.\\nThis version is safer than [ThreadUtilities.FastDefer] as I think the use\\nof varargs can cause some issues.\\n\\n:::warning Erroring\\nI think this function can still throw like [ThreadUtilities.FastDefer] can.\\nHeed the warning from that function here.\\n:::","params":[{"name":"callback","desc":"The function to spawn.","lua_type":"(Arguments...) -> ()"},{"name":"...","desc":"The arguments to the function.","lua_type":"Arguments..."}],"returns":[{"desc":"","lua_type":"thread"}],"function_type":"static","since":"v1.1.0","source":{"line":35,"path":"src/FastDeferSafe.luau"}},{"name":"NoYield","desc":"Executes a function and throws an error if yields at all.\\n\\n```lua\\nprint(ThreadUtilities.NoYield(function()\\n\\treturn \\"This\\", \\"doesn\'t\\", \\"yield\\"\\nend)) -- This doesn\'t yield\\n\\nprint(ThreadUtilities.NoYield(function()\\n\\ttask.wait()\\n\\treturn \\"Errors!!!\\"\\nend)) -- Throws an error!\\n```\\n\\n```ts\\nprint(NoYield(() => $tuple(\\"This\\", \\"doesn\'t\\", \\"yield\\"))) // This doesn\'t yield;\\nprint(\\n\\tNoYield(() => {\\n\\t\\ttask.wait();\\n\\t\\treturn \\"Errors!!!\\";\\n\\t}),\\n); // Throws an error!\\n```","params":[{"name":"callback","desc":"The function to execute.","lua_type":"(Arguments...) -> Returns..."},{"name":"...","desc":"The arguments to the function.","lua_type":"Arguments..."}],"returns":[{"desc":"","lua_type":"Returns..."}],"function_type":"static","source":{"line":53,"path":"src/NoYield.luau"}},{"name":"FastSpawn","desc":"Spawns a function call in a much more performant manner than `task.spawn`\\nor the `coroutine` library can provide.","params":[{"name":"callback","desc":"The function to spawn.","lua_type":"(Arguments...) -> ()"},{"name":"...","desc":"The arguments to the function.","lua_type":"Arguments..."}],"returns":[{"desc":"","lua_type":"thread"}],"function_type":"static","source":{"line":28,"path":"src/FastSpawn.luau"}},{"name":"SafeThreadCancel","desc":"Cancelling threads can sometimes cause weird issues that throw errors. This\\nfunction is a workaround for that to make sure your threads are always\\ncancelled in a safe manner.","params":[{"name":"thread","desc":"The thread to cancel.","lua_type":"thread"}],"returns":[],"function_type":"static","source":{"line":15,"path":"src/SafeThreadCancel.luau"}},{"name":"FastDelaySafe","desc":"Delays a function call in a much more performant manner than `task.delay`.\\n\\nThis function might be \\"safer\\" than [ThreadUtilities.FastDelay], but I\\nwouldn\'t put too much stock in that.\\n\\n:::warning Erroring\\nThis function can sometimes throw some weird error about lifecycle or\\nsomething. If you\'re seeing that, I\'d just go back to `task.delay`.\\n:::","params":[{"name":"delay","desc":"The delay before the function is executed.","lua_type":"number"},{"name":"callback","desc":"The function to spawn.","lua_type":"(Arguments...) -> ()"},{"name":"...","desc":"The arguments to the function.","lua_type":"Arguments..."}],"returns":[{"desc":"","lua_type":"thread"}],"function_type":"static","since":"v1.2.0","source":{"line":37,"path":"src/FastDelaySafe.luau"}}],"properties":[],"types":[],"name":"ThreadUtilities","desc":"Provides utilities for working with threads.","source":{"line":17,"path":"src/init.luau"}}')}}]);