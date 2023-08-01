import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1689770122852 implements MigrationInterface {
    name = 'Migrations1689770122852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subscriber" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_1c52b7ddbaf79cd2650045b79c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "package_details" ("id" SERIAL NOT NULL, "details" character varying NOT NULL, "packageId" integer, CONSTRAINT "PK_48bc3b51d3328e4d66386f94547" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "package" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_308364c66df656295bc4ec467c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subscription" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "startDate" date NOT NULL, "endDate" date NOT NULL, "status" character varying NOT NULL, "subscriberId" integer, "packageId" integer, CONSTRAINT "PK_8c3e00ebd02103caa1174cd5d9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "card_payment" ("id" SERIAL NOT NULL, "cardNumber" character varying NOT NULL, "cardHolderName" character varying NOT NULL, "expiryDate" character varying NOT NULL, "cvv" character varying NOT NULL, "subscriptionId" integer, CONSTRAINT "PK_eb72ce815c9be16aeeef7ebc167" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
        await queryRunner.query(`CREATE TABLE "role_users_user" ("roleId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_46403d6ce64cde119287c876ca3" PRIMARY KEY ("roleId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ed6edac7184b013d4bd58d60e5" ON "role_users_user" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a88fcb405b56bf2e2646e9d479" ON "role_users_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "package_details" ADD CONSTRAINT "FK_632f79b20e9ee9a7cbda8bb2636" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_95a175097e883d7d1deb5780c62" FOREIGN KEY ("subscriberId") REFERENCES "subscriber"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_d6f3d6c674af994f136f2c8e2cb" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "card_payment" ADD CONSTRAINT "FK_3f283a5c8153fe032674065b633" FOREIGN KEY ("subscriptionId") REFERENCES "subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_users_user" ADD CONSTRAINT "FK_ed6edac7184b013d4bd58d60e54" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_users_user" ADD CONSTRAINT "FK_a88fcb405b56bf2e2646e9d4797" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_users_user" DROP CONSTRAINT "FK_a88fcb405b56bf2e2646e9d4797"`);
        await queryRunner.query(`ALTER TABLE "role_users_user" DROP CONSTRAINT "FK_ed6edac7184b013d4bd58d60e54"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"`);
        await queryRunner.query(`ALTER TABLE "card_payment" DROP CONSTRAINT "FK_3f283a5c8153fe032674065b633"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_d6f3d6c674af994f136f2c8e2cb"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_95a175097e883d7d1deb5780c62"`);
        await queryRunner.query(`ALTER TABLE "package_details" DROP CONSTRAINT "FK_632f79b20e9ee9a7cbda8bb2636"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a88fcb405b56bf2e2646e9d479"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ed6edac7184b013d4bd58d60e5"`);
        await queryRunner.query(`DROP TABLE "role_users_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`DROP TABLE "user_roles_role"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "card_payment"`);
        await queryRunner.query(`DROP TABLE "subscription"`);
        await queryRunner.query(`DROP TABLE "package"`);
        await queryRunner.query(`DROP TABLE "package_details"`);
        await queryRunner.query(`DROP TABLE "subscriber"`);
    }

}
