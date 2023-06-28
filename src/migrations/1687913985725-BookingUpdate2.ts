import { MigrationInterface, QueryRunner } from "typeorm";

export class BookingUpdate21687913985725 implements MigrationInterface {
    name = 'BookingUpdate21687913985725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_044c69770fbe9d8f3e8647c4670"`);
        await queryRunner.query(`ALTER TABLE "booking" RENAME COLUMN "objectIdId" TO "objectId"`);
        await queryRunner.query(`ALTER TABLE "booking" RENAME CONSTRAINT "UQ_044c69770fbe9d8f3e8647c4670" TO "UQ_c2c76c2f32ec7659ae0cb6d3c31"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_c2c76c2f32ec7659ae0cb6d3c31" FOREIGN KEY ("objectId") REFERENCES "object"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_c2c76c2f32ec7659ae0cb6d3c31"`);
        await queryRunner.query(`ALTER TABLE "booking" RENAME CONSTRAINT "UQ_c2c76c2f32ec7659ae0cb6d3c31" TO "UQ_044c69770fbe9d8f3e8647c4670"`);
        await queryRunner.query(`ALTER TABLE "booking" RENAME COLUMN "objectId" TO "objectIdId"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_044c69770fbe9d8f3e8647c4670" FOREIGN KEY ("objectIdId") REFERENCES "object"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
