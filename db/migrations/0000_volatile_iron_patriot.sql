CREATE TABLE `guardians` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`email` varchar(256),
	`phone` varchar(256),
	`popularity` enum('unknown','known','popular'),
	CONSTRAINT `guardians_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `players_id` PRIMARY KEY(`id`),
	CONSTRAINT `name_idx` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `players_guardians` (
	`guardians_id` bigint NOT NULL,
	`players_id` bigint NOT NULL,
	CONSTRAINT `players_guardians_guardians_id_players_id` PRIMARY KEY(`guardians_id`,`players_id`)
);
--> statement-breakpoint
ALTER TABLE `players_guardians` ADD CONSTRAINT `players_guardians_guardians_id_guardians_id_fk` FOREIGN KEY (`guardians_id`) REFERENCES `guardians`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `players_guardians` ADD CONSTRAINT `players_guardians_players_id_players_id_fk` FOREIGN KEY (`players_id`) REFERENCES `players`(`id`) ON DELETE no action ON UPDATE no action;