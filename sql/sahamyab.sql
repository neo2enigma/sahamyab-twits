/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : PostgreSQL
 Source Server Version : 140004
 Source Host           : localhost:5432
 Source Catalog        : sahamyab
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140004
 File Encoding         : 65001

 Date: 24/08/2022 12:31:25
*/


-- ----------------------------
-- Table structure for twits
-- ----------------------------
DROP TABLE IF EXISTS "public"."twits";
CREATE TABLE "public"."twits" (
  "typeId" varchar(1) COLLATE "pg_catalog"."default" NOT NULL,
  "content" text COLLATE "pg_catalog"."default",
  "sendTime" timestamptz(0) NOT NULL,
  "id" char(9) COLLATE "pg_catalog"."default" NOT NULL,
  "userName" varchar(20) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "userName" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(50) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Uniques structure for table twits
-- ----------------------------
ALTER TABLE "public"."twits" ADD CONSTRAINT "twits_twitId_key" UNIQUE ("id");

-- ----------------------------
-- Primary Key structure for table twits
-- ----------------------------
ALTER TABLE "public"."twits" ADD CONSTRAINT "twits_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("userName");

-- ----------------------------
-- Foreign Keys structure for table twits
-- ----------------------------
ALTER TABLE "public"."twits" ADD CONSTRAINT "twits_userName_fkey" FOREIGN KEY ("userName") REFERENCES "public"."users" ("userName") ON DELETE NO ACTION ON UPDATE NO ACTION;
