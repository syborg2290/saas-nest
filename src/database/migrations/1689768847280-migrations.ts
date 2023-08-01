import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1689768847280 implements MigrationInterface {
    name = 'Migrations1689768847280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "designation" character varying NOT NULL, "joinDate" date NOT NULL, "workSpaceId" integer, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "work_space" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_77ad2aabe8a56267f822b09fdc0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_6a088e170413cc511c61f9c252b" FOREIGN KEY ("workSpaceId") REFERENCES "work_space"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_6a088e170413cc511c61f9c252b"`);
        await queryRunner.query(`DROP TABLE "work_space"`);
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
