import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602614782757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // realiza as alterações que queremos fazer no DB
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, // não aceita números negativos
                    isPrimary: true,
                    isGenerated: true, // é gerado automaticamente
                    generationStrategy: 'increment' // ao gerar automaticamente é incrementado +1
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10, // máximo de números a serem armazenados
                    precision: 2 // quantidade de númetos após a vírgula
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10, // máximo de números a serem armazenados
                    precision: 2 // quantidade de númetos após a vírgula
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Desfaz o que foi feito no método UP -> rollback
        await queryRunner.dropTable('orphanages')
    }

}
