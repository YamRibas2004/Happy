import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602638433973 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, // não aceita números negativos
                    isPrimary: true,
                    isGenerated: true, // é gerado automaticamente
                    generationStrategy: 'increment' // ao gerar automaticamente é incrementado +1
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'orphanage_id',
                    type: 'integer'
                },
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
