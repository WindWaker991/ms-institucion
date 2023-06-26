import { MigrationInterface, QueryRunner } from "typeorm";

export class BookingUpdate1687747149513 implements MigrationInterface {
    name = 'BookingUpdate1687747149513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" ADD "objectIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "UQ_044c69770fbe9d8f3e8647c4670" UNIQUE ("objectIdId")`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_044c69770fbe9d8f3e8647c4670" FOREIGN KEY ("objectIdId") REFERENCES "object"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_044c69770fbe9d8f3e8647c4670"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "UQ_044c69770fbe9d8f3e8647c4670"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "objectIdId"`);
    }

}
