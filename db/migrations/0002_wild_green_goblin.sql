ALTER TABLE `players` DROP CONSTRAINT `name_idx`;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `id_idx` UNIQUE(`id`);