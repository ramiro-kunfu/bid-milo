CREATE TABLE IF NOT EXISTS "bb_bids" (
	"id" serial PRIMARY KEY NOT NULL,
	"bidder" text NOT NULL,
	"amount" varchar(256) NOT NULL
);
