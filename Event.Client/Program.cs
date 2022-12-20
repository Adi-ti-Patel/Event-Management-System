using Event.Business.Interface;
using Event.Data.DBContext;
using Event.Data.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();

builder.Services.AddDbContext<EventDbContext>(option =>
    option.UseSqlServer(builder.Configuration.GetConnectionString("EventManagementSystem"))
);

builder.Services.AddTransient<EventDbContext, EventDbContext>();
builder.Services.AddTransient<IEventsRepository, EventsRepository>();
builder.Services.AddTransient<ICitiesRepository, CitiesRepository>();
builder.Services.AddTransient<ISpeakersRepository, SpeakersRepository>();
builder.Services.AddTransient<ITalkDetailsRepository, TalkDetailsRepository>();
builder.Services.AddTransient<IVenueRepository, VenueRepository>();

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseCors(options =>
    options.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
