IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230313063649_InitialCreate')
BEGIN
    CREATE TABLE [EventClients] (
        [id] int NOT NULL IDENTITY,
        [eventName] nvarchar(100) NOT NULL,
        [type] nvarchar(100) NOT NULL,
        [others] nvarchar(100) NULL,
        [startTime] nvarchar(100) NULL,
        [endTime] nvarchar(100) NULL,
        [location] nvarchar(255) NOT NULL,
        [eventDate] nvarchar(100) NOT NULL,
        CONSTRAINT [PK_EventClients] PRIMARY KEY ([id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230313063649_InitialCreate')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230313063649_InitialCreate', N'7.0.3');
END;
GO

COMMIT;
GO

