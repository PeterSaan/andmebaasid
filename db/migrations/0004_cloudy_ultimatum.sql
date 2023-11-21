ALTER TABLE `players` DROP CONSTRAINT `players_id_unique`;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `id_idx` UNIQUE(`id`);