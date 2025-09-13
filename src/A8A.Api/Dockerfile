FROM mcr.microsoft.com/dotnet/sdk:10.0-preview AS build
WORKDIR /src

COPY ["src/A8A.Api/A8A.Api.csproj", "A8A.Api/"]
RUN dotnet restore "A8A.Api/A8A.Api.csproj"

COPY ["src/A8A.Api", "A8A.Api"]
RUN dotnet publish "A8A.Api/A8A.Api.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0-preview AS final
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "A8A.Api.dll"]
