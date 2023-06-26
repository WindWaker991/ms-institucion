import { MigrationInterface, QueryRunner } from "typeorm";

export class BookingActualitation1687739604619 implements MigrationInterface {
    name = 'BookingActualitation1687739604619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "startTime"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "schedule" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "schedule"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "endTime" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "startTime" TIMESTAMP NOT NULL`);
    }

}
