## User Story
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
## Acceptance Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
## Final Application

When users open the application they are presented with search option so they can search to find their desired city:
![readme-1](https://user-images.githubusercontent.com/88262115/152228906-409bc3f0-cae2-4ae0-b7e1-4103582fe5f6.jpg)

After they type in city name (with or without state name since the state name option is added for extra accuracy) they will be presented with current weather info as well as 5-day forecast for selected city. They will also see UV index changes to 5 different colors according to the current UV index level:
![readme-2](https://user-images.githubusercontent.com/88262115/152229632-e659c485-4fc8-4494-ad83-d83a0f462d17.jpg)

Each time users search for a city that city gets added to local storage and will display in search history area:
![readme-3](https://user-images.githubusercontent.com/88262115/152229871-1c0414fa-40b9-427b-b52d-ca05b6d9647d.jpg)

I have also added the Clear Search History button that clears local storage and refreshes the page so no city name will display in search history area:
![readme-4](https://user-images.githubusercontent.com/88262115/152230338-c68dd583-41eb-4cd5-aaf0-bebf1497ba0c.jpg)

Finally this web application is built fully responsive for different screen sizes:
![readme-5](https://user-images.githubusercontent.com/88262115/152230609-4c2c71e7-688f-4008-a953-44e1801ae0ef.jpg)
![readme-6](https://user-images.githubusercontent.com/88262115/152230626-71840037-5481-429c-9848-4066235a12c1.jpg)
![readme-7](https://user-images.githubusercontent.com/88262115/152230634-f5ee5e5c-8b52-4950-8483-44c46bc998cc.jpg)
![readme-8](https://user-images.githubusercontent.com/88262115/152230647-8c79be38-f2a7-44ff-b87b-928f2f1ccf86.jpg)

## Link to the Final Application

https://ashariat.github.io/weather-dashboard/
