# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0-preview AS build
WORKDIR /src

# Copy project file first for better layer caching
COPY ["src/A8A.Api/A8A.Api.csproj", "A8A.Api/"]

# Restore dependencies
RUN dotnet restore "A8A.Api/A8A.Api.csproj"

# Copy source code
COPY ["src/A8A.Api", "A8A.Api"]

# Build and publish
RUN dotnet publish "A8A.Api/A8A.Api.csproj" -c Release -o /app/publish --no-restore --verbosity minimal

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0-preview AS final

WORKDIR /app

# Copy published files
COPY --from=build /app/publish .

# Configure ASP.NET Core
ENV ASPNETCORE_URLS=http://+:8080

EXPOSE 8080

ENTRYPOINT ["dotnet", "A8A.Api.dll"]
