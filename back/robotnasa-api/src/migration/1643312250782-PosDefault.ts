import { MigrationInterface, QueryRunner } from 'typeorm';

export class PosDefault1643312250782 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `INSERT INTO Robot ("id", "command", "initialPos", "finalPos", "isValid") VALUES (0, 'initial' ,'(0,0,N)', '(0,0,N)', true);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DELETE FROM Robot WHERE id=0;`);
  }
}
