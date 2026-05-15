CREATE TABLE [livros] (
	[id] int IDENTITY(1, 1),
	[idAutor] int NOT NULL,
	[nome] varchar(100) NOT NULL,
	[descricao] text NOT NULL,
	[criado_em] datetime NOT NULL CONSTRAINT [livros_criado_em_default] DEFAULT (getdate()),
	CONSTRAINT [livros_pkey] PRIMARY KEY([id])
);
--> statement-breakpoint
ALTER TABLE [livros] ADD CONSTRAINT [livros_idAutor_autores_id_fk] FOREIGN KEY ([idAutor]) REFERENCES [autores]([id]);