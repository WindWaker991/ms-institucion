import { MigrationInterface, QueryRunner } from "typeorm";

export class EntitiesActualization1687746864502 implements MigrationInterface {
    name = 'EntitiesActualization1687746864502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "schedule"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" ADD "schedule" character varying NOT NULL`);
    }

}
