import { saveCache, restoreCache } from 'npm:@actions/cache@3.2.1';

Deno.writeTextFileSync('cache.txt', 'Hello World');

console.log(Deno.env.get('ACTIONS_CACHE_URL'));

saveCache(['cache.txt'], 'cache-key');
