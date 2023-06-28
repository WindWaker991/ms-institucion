import { MigrationInterface, QueryRunner } from "typeorm";

export class ObjectsUpdate1687916089080 implements MigrationInterface {
    name = 'ObjectsUpdate1687916089080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "object" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "object" ADD CONSTRAINT "UQ_61a27512093847c3199ce43a03c" UNIQUE ("categoryId")`);
        await queryRunner.query(`ALTER TABLE "object" ADD CONSTRAINT "FK_61a27512093847c3199ce43a03c" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "object" DROP CONSTRAINT "FK_61a27512093847c3199ce43a03c"`);
        await queryRunner.query(`ALTER TABLE "object" DROP CONSTRAINT "UQ_61a27512093847c3199ce43a03c"`);
        await queryRunner.query(`ALTER TABLE "object" DROP COLUMN "categoryId"`);
    }

}
