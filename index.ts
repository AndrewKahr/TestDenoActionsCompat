import { saveCache, restoreCache } from 'npm:@actions/cache@3.2.1';

Deno.writeTextFileSync('cache.txt', 'Hello World');

saveCache(['cache.txt'], 'cache-key');
