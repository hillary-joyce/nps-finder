const stateParks = [
  {
    id: 1,
    state: "Alabama",
    latLong: "lat:34.41461863, long:-85.61734327",
    description: "Little River is unique because it flows for most of its length atop Lookout Mountain in northeast Alabama. Forested uplands, waterfalls, canyon rims and bluffs, pools, boulders, and sandstone cliffs offer settings for a variety of recreational activities. Natural resources and cultural heritage come together to tell the story of the Preserve, a special place in the Southern Appalachians.",
    designation: "National Preserve",
    fullName: "Little River Canyon National Preserve",
    "url": "https://www.nps.gov/liri/index.htm",
    address: "4322 Little River Trail NE, Suite 100, Fort Payne, AL 35967",
    hours: "The main park is open during daylight hours every day including holidays."
  },
  {
    id: 2,
    state: "Alaska",
    latLong: "lat:65.96087902, long:-164.4086432",
    description: "Bering Land Bridge National Preserve lies at the continental crossroads that greatly influenced the distribution of life in the Western Hemisphere during the Pleistocene Epoch. It is a vital landscape for indigenous communities who depend on the land just as their ancestors did for many generations. It is a wild and ecologically healthy landscape unlike any other.",
    designation: "National Preserve",
    fullName: "Bering Land Bridge National Preserve",
    "url": "https://www.nps.gov/bela/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 3,
    state: "Alaska",
    latLong: "lat:63.29777484, long:-151.0526568",
    description: "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains, culminating in North America's tallest peak, 20,310' Denali. Wild animals large and small roam un-fenced lands, living as they have for ages. Solitude, tranquility and wilderness await.",
    designation: "National Park & Preserve",
    fullName: "Denali National Park & Preserve",
    address: "",
    hours: ""
  },
  {
    id: 4,
    state: "Alaska",
    latLong: "lat:67.75961636, long:-153.2917758",
    description: "This vast landscape does not contain any roads or trails. Visitors discover intact ecosystems where people have lived with the land for thousands of years. Wild rivers meander through glacier-carved valleys, caribou migrate along age-old trails, endless summer light fades into aurora-lit night skies of winter. It remains virtually unchanged except by the forces of nature.",
    designation: "National Park & Preserve",
    fullName: "Gates Of The Arctic National Park & Preserve",
    "url": "https://www.nps.gov/gaar/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 5,
    state: "Alaska",
    latLong: "lat:58.80086718, long:-136.8407579",
    description: "Covering 3.3 million acres of rugged mountains, dynamic glaciers, temperate rainforest, wild coastlines and deep sheltered fjords, Glacier Bay National Park is a highlight of Alaska's Inside Passage and part of a 25-million acre World Heritage Site—one of the world’s largest international protected areas. From sea to summit, Glacier Bay offers limitless opportunities for adventure and inspiration.",
    designation: "National Park & Preserve",
    fullName: "Glacier Bay National Park & Preserve",
    "url": "https://www.nps.gov/glba/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 6,
    state: "Alaska",
    latLong: "lat:58.62235668, long:-155.0126574",
    description: "A landscape alive underneath our feet, filled with creatures that remind us what it is to be wild.\n\nKatmai was established in 1918 to protect the volcanically devastated region surrounding Novarupta and the Valley of Ten Thousand Smokes. Today, Katmai National Park and Preserve also protects 9,000 years of human history and important habitat for salmon and thousands of brown bears.",
    designation: "National Park & Preserve",
    fullName: "Katmai National Park & Preserve",
    "url": "https://www.nps.gov/katm/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 7,
    state: "Alaska",
    latLong: "lat:59.81804414, long:-150.106502",
    description: "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Sugpiaq people relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
    designation: "National Park",
    fullName: "Kenai Fjords National Park",
    "url": "https://www.nps.gov/kefj/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 8,
    state: "Alaska",
    latLong: "lat:67.35631336, long:-159.2002293",
    description: "Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Half a million caribou migrate through, their tracks crisscrossing sculpted dunes. The Kobuk River is an ancient and current path for people and wildlife. For 9000 years, people came to Onion Portage to harvest caribou as they swam the river. Even today, that rich tradition continues.",
    designation: "National Park",
    fullName: "Kobuk Valley National Park",
    "url": "https://www.nps.gov/kova/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 9,
    state: "Alaska",
    latLong: "lat:60.57405857, long:-153.55535",
    description: "Lake Clark National Park and Preserve is a land of stunning beauty. Volcanoes steam, salmon run, bears forage, and craggy mountains reflect in shimmering turquoise lakes. Here, too, local people and culture still depend on the land and water. Venture into the park to become part of the wilderness.",
    designation: "National Park & Preserve",
    fullName: "Lake Clark National Park & Preserve",
    "url": "https://www.nps.gov/lacl/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 10,
    state: "Alaska",
    latLong: "lat:68.01027053, long:-159.831694",
    description: "As one of North America's largest mountain-ringed river basins with an intact ecosystem, the Noatak River environs features some of the Arctic's finest arrays of plants and animals. The river is classified as a national wild and scenic river, and offers stunning wilderness float-trip opportunities - from deep in the Brooks Range to the tidewater of the Chukchi Sea.",
    designation: "National Preserve",
    fullName: "Noatak National Preserve",
    "url": "https://www.nps.gov/noat/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 11,
    state: "Alaska",
    latLong: "lat:61.4182147, long:-142.6028439",
    description: "Wrangell St. Elias is a vast national park that rises from the ocean all the way up to 18,008 ft. At 13.2 million acres, the park is the same size as Yellowstone National Park, Yosemite National Park, and Switzerland combined! Within this wild landscape, people continue to live off the land as they have done for centuries. This rugged, beautiful land is filled with opportunities for adventure.",
    designation: "National Park & Preserve",
    fullName: "Wrangell - St Elias National Park & Preserve",
    "url": "https://www.nps.gov/wrst/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 12,
    state: "Alaska",
    latLong: "lat:65.0935608, long:-142.7960021",
    description: "Located in Interior Alaska, Yukon-Charley Rivers offers exploration in a largely untouched landscape. Whether you float the mighty Yukon River or paddle the Charley River's whitewater, your memories will last a lifetime. Geology, cultural history, gold rush remnants, wildlife, and vast scenery will be a part of your experience. But, the strongest element will be solitude. Your adventure awaits.",
    designation: "National Preserve",
    fullName: "Yukon - Charley Rivers National Preserve",
    "url": "https://www.nps.gov/yuch/index.htm",
    address: "",
    hours: ""
  },
  {
    id: 13,
    state: "Arizona",
    latLong: "lat:36.17280161, long:-112.6836024",
    description: "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.\n\nThe South Rim is open all year\n \nThe North Rim is closed for the winter. It will reopen on May 15, 2019.",
    designation: "National Park",
    fullName: "Grand Canyon National Park",
    "url": "https://www.nps.gov/grca/index.htm",
    address: "",
    hours: ""
  },
  {
  state: "Arizona",
  latLong: "lat:34.98387664, long:-109.7877678",
  description: "Did you know that Petrified Forest is more spectacular than ever? While the park has all the wonders known for a century, there are many new adventures and discoveries to share. There are backcountry hikes into areas never open before such as Red Basin and little known areas like the Martha's Butte. There are new exhibits that bring the stories to life. Come rediscover Petrified Forest!",
  designation: "National Park",
  fullName: "Petrified Forest National Park",
  "url": "https://www.nps.gov/pefo/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Arizona",
  latLong: "lat:32.20909636, long:-110.7574974",
  description: "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
  designation: "National Park",
  fullName: "Saguaro National Park",
  "url": "https://www.nps.gov/sagu/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Arkansas",
  latLong: "lat:34.52414366, long:-93.06332936",
  description: "Water. That's what first attracted people, and they have been coming here ever since to use these soothing thermal waters to heal and relax. Rich and poor alike came for the baths, and a thriving city built up around the hot springs. Together nicknamed \"The American Spa,\" Hot Springs National Park today surrounds the north end of the city of Hot Springs, Arkansas. Come discover it for yourself.",
  designation: "National Park",
  fullName: "Hot Springs National Park",
  "url": "https://www.nps.gov/hosp/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California",
  latLong: "lat:33.98680093, long:-119.9112735",
  description: "Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was.",
  designation: "National Park",
  fullName: "Channel Islands National Park",
  "url": "https://www.nps.gov/chis/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California Nevada",
  latLong: "lat:36.48753731, long:-117.134395",
  description: "In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.",
  designation: "National Park",
  fullName: "Death Valley National Park",
  "url": "https://www.nps.gov/deva/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California",
  latLong: "lat:33.91418525, long:-115.8398125",
  description: "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.",
  designation: "National Park",
  fullName: "Joshua Tree National Park",
  "url": "https://www.nps.gov/jotr/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California",
  latLong: "lat:40.49354575, long:-121.4075993",
  description: "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land. Lassen Volcanic offers opportunities to discover the wonder and mysteries of volcanoes and hot water for visitors willing to explore the undiscovered.",
  designation: "National Park",
  fullName: "Lassen Volcanic National Park",
  "url": "https://www.nps.gov/lavo/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California",
  latLong: "lat:35.12485941, long:-115.5168258",
  description: "Singing sand dunes, volcanic cinder cones, Joshua tree forests, and carpets of wildflowers are all found at this 1.6 million acre park. A visit to its canyons, mountains and mesas will reveal long-abandoned mines, homesteads, and rock-walled military outposts. Located between Los Angeles and Las Vegas, Mojave provides serenity and solitude from major metropolitan areas.",
  designation: "National Preserve",
  fullName: "Mojave National Preserve",
  "url": "https://www.nps.gov/moja/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California",
  latLong: "lat:36.49029208, long:-121.1813607",
  description: "Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor.",
  designation: "National Park",
  fullName: "Pinnacles National Park",
  "url": "https://www.nps.gov/pinn/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California",
  latLong: "lat:41.37237268, long:-124.0318129",
  description: "Most people know Redwood as home to the tallest trees on Earth. The parks also protect vast prairies, oak woodlands, wild river-ways, and nearly 40-miles of rugged coastline.  For thousands of years people have lived in this verdant landscape.  Together, the National Park Service and California State Parks are managing and restoring these lands for the inspiration, enjoyment, and education of all.",
  designation: "National and State Parks",
  fullName: "Redwood National and State Parks",
  "url": "https://www.nps.gov/redw/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California",
  latLong: "lat:36.71277299, long:-118.587429",
  description: "This dramatic landscape testifies to nature's size, beauty, and diversity--huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees. These two parks lie side by side in the southern Sierra Nevada east of the San Joaquin Valley. Weather varies a lot by season and elevation, which ranges from 1,370' to 14,494'.",
  designation: "National Parks",
  fullName: "Sequoia & Kings Canyon National Parks",
  "url": "https://www.nps.gov/seki/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "California",
  latLong: "lat:37.84883288, long:-119.5571873",
  description: "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.\n\nFirst protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
  designation: "National Park",
  fullName: "Yosemite National Park",
  "url": "https://www.nps.gov/yose/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Colorado",
  latLong: "lat:38.57779869, long:-107.7242756",
  description: "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
  designation: "National Park",
  fullName: "Black Canyon Of The Gunnison National Park",
  "url": "https://www.nps.gov/blca/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Colorado",
  latLong: "lat:37.79256812, long:-105.5919572",
  description: "The tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, conifer and aspen forests, alpine lakes, and tundra. Experience this diversity through hiking, sand sledding, splashing in Medano Creek, wildlife watching, and more! The park and preserve are always open, so plan to also experience night skies and nocturnal wildlife during your visit.",
  designation: "National Park & Preserve",
  fullName: "Great Sand Dunes National Park & Preserve",
  "url": "https://www.nps.gov/grsa/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Colorado",
  latLong: "lat:37.23908345, long:-108.4624032",
  description: "Mesa Verde National Park was established in 1906 to preserve and interpret the archeological heritage of the Ancestral Pueblo people who made it their home for over 700 years, from 600 to 1300 CE. Today, the park protects nearly 5,000 known archeological sites, including 600 cliff dwellings. These sites are some of the most notable and best preserved in the United States.",
  designation: "National Park",
  fullName: "Mesa Verde National Park",
  "url": "https://www.nps.gov/meve/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Colorado",
  latLong: "lat:40.3556924, long:-105.6972879",
  description: "Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!",
  designation: "National Park",
  fullName: "Rocky Mountain National Park",
  "url": "https://www.nps.gov/romo/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Florida",
  latLong: "lat:25.97079602, long:-81.08120629",
  description: "The freshwaters of the Big Cypress Swamp, essential to the health of the neighboring Everglades, support the rich marine estuaries along Florida's southwest coast. Protecting over 729,000 acres of this vast swamp, Big Cypress National Preserve contains a mixture of tropical and temperate plant communities that are home to a diversity of wildlife, including the elusive Florida panther.",
  designation: "National Preserve",
  fullName: "Big Cypress National Preserve",
  "url": "https://www.nps.gov/bicy/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Florida",
  latLong: "lat:25.490587, long:-80.21023851",
  description: "Within sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Here too is evidence of 10,000 years of human history, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife…or simply relax in a rocking chair gazing out over the bay.",
  designation: "National Park",
  fullName: "Biscayne National Park",
  "url": "https://www.nps.gov/bisc/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Florida",
  latLong: "lat:24.64884965, long:-82.87176297",
  description: "Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands.  Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life, and the vast assortment of bird life that frequents the area.",
  designation: "National Park",
  fullName: "Dry Tortugas National Park",
  "url": "https://www.nps.gov/drto/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Florida",
  latLong: "lat:25.37294225, long:-80.88200301",
  description: "Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee,  American crocodile, and the elusive Florida panther.\n\nAn international treasure as well -  a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty.",
  designation: "National Park",
  fullName: "Everglades National Park",
  "url": "https://www.nps.gov/ever/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Hawaii",
  latLong: "lat:20.70693015, long:-156.1591775",
  description: "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.",
  designation: "National Park",
  fullName: "Haleakala National Park",
  "url": "https://www.nps.gov/hale/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Hawaii",
  latLong: "lat:19.3355036, long:-155.4700257",
  description: "Park opening updates:",
  designation: "National Park",
  fullName: "Hawai'i Volcanoes National Park",
  "url": "https://www.nps.gov/havo/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Idaho Montana Wyoming",
  latLong: "lat:44.59824417, long:-110.5471695",
  description: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano’s hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures “for the benefit and enjoyment of the people.”",
  designation: "National Park",
  fullName: "Yellowstone National Park",
  "url": "https://www.nps.gov/yell/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Kansas",
  latLong: "lat:38.44023613, long:-96.5670822",
  description: "Where's the tall grass? Tallgrass prairie once covered 170 million acres of North America. Within a generation the vast majority was developed and plowed under. Today less than 4% remains, mostly here in the Kansas Flint Hills. The preserve protects a nationally significant remnant of the once vast tallgrass prairie and its cultural resources. Here the tallgrass prairie makes its last stand.",
  designation: "National Preserve",
  fullName: "Tallgrass Prairie National Preserve",
  "url": "https://www.nps.gov/tapr/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Kentucky",
  latLong: "lat:37.19760458, long:-86.13090198",
  description: "Mammoth Cave National Park preserves the cave system and a part of the Green River valley and hilly country of south central Kentucky. This is the world's longest known cave system, with more than 400 miles (643 km) explored. Early guide Stephen Bishop called the cave a \"grand, gloomy and peculiar place,\" but its vast chambers and complex labyrinths have earned its name - Mammoth.",
  designation: "National Park",
  fullName: "Mammoth Cave National Park",
  "url": "https://www.nps.gov/maca/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Maine",
  latLong: "lat:44.30777545, long:-68.30063316",
  description: "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats with high biodiversity, clean air and water, and a rich cultural heritage. Each year, more than 3.3 million people explore seven peaks above 1,000 feet, 158 miles of hiking trails, and 45 miles of carriage roads with 16 stone bridges.",
  designation: "National Park",
  fullName: "Acadia National Park",
  "url": "https://www.nps.gov/acad/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Michigan",
  latLong: "lat:48.01145819, long:-88.82780657",
  description: "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers unparalleled solitude and adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, you'll find opportunities for reflection and discovery, and make memories that last a lifetime.",
  designation: "National Park",
  fullName: "Isle Royale National Park",
  "url": "https://www.nps.gov/isro/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Minnesota",
  latLong: "lat:48.48370609, long:-92.8382913",
  description: "With over 40% of the park water, Voyageurs is a maze of interconnected water highways. Plan ahead before coming to this water park by bringing your own watercraft, reserving a watercraft, or taking a park ranger boat tour.",
  designation: "National Park",
  fullName: "Voyageurs National Park",
  "url": "https://www.nps.gov/voya/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Missouri",
  latLong: "lat:38.62328806, long:-90.18039557",
  description: "The Gateway Arch reflects St. Louis' role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jefferson's role in opening the West, to the pioneers who helped shape its history, and to Dred Scott who sued for his freedom in the Old Courthouse.",
  designation: "National Park",
  fullName: "Gateway Arch National Park",
  "url": "https://www.nps.gov/jeff/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Montana",
  latLong: "lat:48.68414678, long:-113.8009306",
  description: "Come and experience Glacier's pristine forests, alpine meadows, rugged mountains, and spectacular lakes. With over 700 miles of trails, Glacier is a hiker's paradise for adventurous visitors seeking wilderness and solitude. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road. Explore Glacier National Park and discover what awaits you.",
  designation: "National Park",
  fullName: "Glacier National Park",
  "url": "https://www.nps.gov/glac/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Nevada",
  latLong: "lat:38.94617378, long:-114.2579782",
  description: "From the 13,000-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a whole lot more than just desert here!",
  designation: "National Park",
  fullName: "Great Basin National Park",
  "url": "https://www.nps.gov/grba/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "New Mexico",
  latLong: "lat:32.14089463, long:-104.5529688",
  description: "High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves—formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.",
  designation: "National Park",
  fullName: "Carlsbad Caverns National Park",
  "url": "https://www.nps.gov/cave/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "New Mexico",
  latLong: "lat:35.91682872, long:-106.5195724",
  description: "About 1.25 million years ago, a spectacular volcanic eruption created the 13-mile wide circular depression now known as the Valles Caldera.  The preserve is known for its huge mountain meadows, abundant wildlife, and meandering streams. The area also preserves the homeland of ancestral native peoples and embraces a rich ranching history.",
  designation: "National Preserve",
  fullName: "Valles Caldera National Preserve",
  "url": "https://www.nps.gov/vall/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "North Carolina Tennessee",
  latLong: "lat:35.60116374, long:-83.50818326",
  description: "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park.",
  designation: "National Park",
  fullName: "Great Smoky Mountains National Park",
  "url": "https://www.nps.gov/grsm/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "North Dakota",
  latLong: "lat:47.17777274, long:-103.4300083",
  description: "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
  designation: "National Park",
  fullName: "Theodore Roosevelt National Park",
  "url": "https://www.nps.gov/thro/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Ohio",
  latLong: "lat:41.26093905, long:-81.57116722",
  description: "Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.",
  designation: "National Park",
  fullName: "Cuyahoga Valley National Park",
  "url": "https://www.nps.gov/cuva/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Oregon",
  latLong: "lat:42.94065854, long:-122.1338414",
  description: "Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity: fed by rain and snow, it’s the deepest lake in the USA and perhaps the most pristine on earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.",
  designation: "National Park",
  fullName: "Crater Lake National Park",
  "url": "https://www.nps.gov/crla/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "South Carolina",
  latLong: "lat:33.79187523, long:-80.74867805",
  description: "Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States. Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees.",
  designation: "National Park",
  fullName: "Congaree National Park",
  "url": "https://www.nps.gov/cong/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "South Dakota",
  latLong: "lat:43.68584846, long:-102.482942",
  description: "The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient mammals such as the rhino, horse, and saber-toothed cat once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.",
  designation: "National Park",
  fullName: "Badlands National Park",
  "url": "https://www.nps.gov/badl/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "South Dakota",
  latLong: "lat:43.58012365, long:-103.4394709",
  description: "Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere.",
  designation: "National Park",
  fullName: "Wind Cave National Park",
  "url": "https://www.nps.gov/wica/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Texas",
  latLong: "lat:29.29817767, long:-103.2297897",
  description: "There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend...",
  designation: "National Park",
  fullName: "Big Bend National Park",
  "url": "https://www.nps.gov/bibe/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Texas",
  latLong: "lat:31.92304462, long:-104.885527",
  description: "Guadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival. Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other within the NPS.",
  designation: "National Park",
  fullName: "Guadalupe Mountains National Park",
  "url": "https://www.nps.gov/gumo/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Utah",
  latLong: "lat:38.72261844, long:-109.5863666",
  description: "Visit Arches to discover a landscape of contrasting colors, land forms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.",
  designation: "National Park",
  fullName: "Arches National Park",
  "url": "https://www.nps.gov/arch/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Utah",
  latLong: "lat:37.58399144, long:-112.1826689",
  description: "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
  designation: "National Park",
  fullName: "Bryce Canyon National Park",
  "url": "https://www.nps.gov/brca/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Utah",
  latLong: "lat:38.24555783, long:-109.8801624",
  description: "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.",
  designation: "National Park",
  fullName: "Canyonlands National Park",
  "url": "https://www.nps.gov/cany/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Utah",
  latLong: "lat:38.2821653130533, long:-111.247048377991",
  description: "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.",
  designation: "National Park",
  fullName: "Capitol Reef National Park",
  "url": "https://www.nps.gov/care/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Utah",
  latLong: "lat:37.29839254, long:-113.0265138",
  description: "Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.",
  designation: "National Park",
  fullName: "Zion National Park",
  "url": "https://www.nps.gov/zion/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Virginia",
  latLong: "lat:38.49236644, long:-78.46907715",
  description: "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is your escape to recreation and re-creation. Cascading waterfalls, spectacular vistas, quiet wooded hollows—take a hike, meander along Skyline Drive, or picnic with the family. 200,000 acres of protected lands are haven to deer, songbirds, the night sky…and you. Plan a Shenandoah escape today!",
  designation: "National Park",
  fullName: "Shenandoah National Park",
  "url": "https://www.nps.gov/shen/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Washington",
  latLong: "lat:46.86075416, long:-121.7043885",
  description: "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.",
  designation: "National Park",
  fullName: "Mount Rainier National Park",
  "url": "https://www.nps.gov/mora/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Washington",
  latLong: "lat:48.71171756, long:-121.2069423",
  description: "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
  designation: "National Park",
  fullName: "North Cascades National Park",
  "url": "https://www.nps.gov/noca/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Washington",
  latLong: "lat:47.80392754, long:-123.6663848",
  description: "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!",
  designation: "National Park",
  fullName: "Olympic National Park",
  "url": "https://www.nps.gov/olym/index.htm",
  address: "",
  hours: ""
  },
  {
  state: "Wyoming",
  latLong: "lat:43.81853565, long:-110.7054666",
  description: "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River or enjoy the serenity of this remarkable place.",
  designation: "National Park",
  fullName: "Grand Teton National Park",
  "url": "https://www.nps.gov/grte/index.htm",
  address: "",
  hours: ""
  }
]

export default stateParks
