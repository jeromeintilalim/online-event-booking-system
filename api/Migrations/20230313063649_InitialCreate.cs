using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace sad_react_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EventClients",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    eventName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    type = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    others = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    startTime = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    endTime = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    location = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    eventDate = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventClients", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventClients");
        }
    }
}
