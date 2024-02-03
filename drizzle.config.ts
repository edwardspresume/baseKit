import type { Config } from 'drizzle-kit';

export default {
	schema: 'src/lib/database/schema.ts',
	out: './drizzleMigrations',
	driver: 'better-sqlite',
	dbCredentials: {
		url: 'databaseStorage/sqlite.db'
	}
} satisfies Config;
