import { MigrationInterface, QueryRunner } from "typeorm";

export class FixEntities1686885928972 implements MigrationInterface {
    name = 'FixEntities1686885928972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "object" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "object" ADD "number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "object" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "object" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "description"`);
    }

}
