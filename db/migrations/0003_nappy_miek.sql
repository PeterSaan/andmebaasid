ALTER TABLE `players` DROP CONSTRAINT `id_idx`;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `players_id_unique` UNIQUE(`id`);