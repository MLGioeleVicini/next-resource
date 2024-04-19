BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Resources] (
    [id_resource] INT NOT NULL,
    [resource_extension] NVARCHAR(1000) NOT NULL,
    [id_localization] INT NOT NULL,
    [page_keys] NVARCHAR(1000) NOT NULL,
    [resource_key] NVARCHAR(1000) NOT NULL,
    [resource_value] NVARCHAR(1000) NOT NULL,
    [directive_key] NVARCHAR(1000) NOT NULL,
    [directive_value] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Resources_pkey] PRIMARY KEY CLUSTERED ([id_resource])
);

-- CreateTable
CREATE TABLE [dbo].[Localizations] (
    [id_localization] INT NOT NULL,
    [localization_code] NVARCHAR(1000) NOT NULL,
    [localization_title] NVARCHAR(1000) NOT NULL,
    [is_default] BIT NOT NULL,
    CONSTRAINT [Localizations_pkey] PRIMARY KEY CLUSTERED ([id_localization])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
