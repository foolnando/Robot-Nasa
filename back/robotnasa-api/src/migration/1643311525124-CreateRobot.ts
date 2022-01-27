import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRobot1643311525124 implements MigrationInterface {
  name = 'CreateRobot1643311525124';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "robot" ("id" SERIAL NOT NULL, "command" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "initialPos" character varying NOT NULL, "finalPos" character varying NOT NULL, "isValid" boolean NOT NULL, CONSTRAINT "PK_b4fbeccee808e9f8ffe2540b0c2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "robot"`);
  }
}
