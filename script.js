const themes = [
    "Vintage Glamour", "Urban Street Style", "Nature and Wilderness", "Black and White", "Neon Lights", 
    "Futuristic/Sci-Fi", "Boho Chic", "High Fashion", "Abstract Expressionism", "Classic Hollywood", 
    "Gothic Dark Romance", "Pin-Up Retro", "Fairy Tale", "Fantasy World", "Post-Apocalyptic", 
    "Industrial Revolution", "Minimalism", "Surrealism", "Art Deco", "Horror/Vampire", "Street Art & Graffiti"
];

const locations = [
    "Abandoned Warehouse", "Forest/Outdoor Park", "Rooftop", "Urban Alleyway", "Studio with Minimalist Backdrop", 
    "Luxury Hotel Lobby", "Beach at Sunset", "Art Gallery/Exhibition", "Café or Coffee Shop", "Industrial Zone", 
    "Old Train Station", "Desert or Sand Dunes", "Urban Graffiti Wall", "Luxury Penthouse", "Desolate Beach with Stormy Skies", 
    "Abandoned Amusement Park", "Flower Field", "Underground Tunnel or Subway Station", "Forest with a Waterfall", 
    "Lush Greenhouse or Botanical Garden", "Night Market or Fair", "Old Mansion or Castle", "Boat Dock or Lake", "Mountain Top or Cliffside"
];

const wardrobes = [
    "Classic Black Dress", "Leather Jackets", "Floral Dresses", "Hats and Accessories", "Athleisure", 
    "Monochrome Outfits", "Cosmic/Futuristic Gear", "Business Formal/Power Suit", "Casual Denim/Streetwear", "Glamorous Evening Gown", 
    "Vintage Suits & Dresses", "Sportswear or Team Jerseys", "Jumpsuits", "Lingerie/Intimate Wear", "Bohemian Flowing Skirts and Tops", 
    "Renaissance or Medieval Costumes", "Cultural/Traditional Outfits", "Punk Rock Inspired", "Tropical Prints and Bold Colors", 
    "Overalls & Utility Wear", "Biker Jackets and Boots", "Silk Pajamas or Sleepwear", "Swimwear", "Safari or Adventure Gear", 
    "Urban Streetwear and Sneakers", "Flared Pants and 70’s Vibes", "Dramatic Capes or Cloaks"
];

const lighting = [
    "Soft Natural Light", "Golden Hour", "Artificial Studio Lighting", "Colorful Neon Glow", "High Contrast Shadows", 
    "Low-Key Lighting", "Overhead Skylight", "Candlelight or Dim Mood Lighting", "Dramatic Backlighting", "Fog/Mist for a Mysterious Vibe", 
    "Hard Light with Defined Shadows", "Fluorescent Lighting", "Glow Sticks or Glow in the Dark Elements", "Hazy Lighting (Filtered Light)", 
    "Bokeh Effects", "Spotlight Focus on Subject", "Strobe Flash for High Energy", "Firelight or Torchlight", 
    "Streetlight or Lamp Light (Night Shoot)", "Fairy Lights/String Lights", "Reflectors for Soft Fill Light", "Sunset Golden Light (Warm Glow)", 
    "LED Panels for Color Effects", "Moonlight/Blue Hour (Night)", "Vintage Lightbulbs/Incandescent Light", "Backlit Windows with Sheer Drapes"
];

const poses = [
    "Power Pose (Strong Stance)", "Soft and Dreamy", "Laughing/Candid Shots", "Profile Silhouette", "Movement (Dancing or Walking)", 
    "Staring Directly at the Camera", "Looking Away/Contemplative", "Laying Down or Reclining", "Action Shots (Jumping, Running)", 
    "Playful/Surprised Expression", "Hands in Hair", "Head Tilt", "Crossed Arms (Confident Stance)", "Leaning Against a Wall", 
    "Crouching or Kneeling", "Holding or Interacting with an Object", "Back to Camera (Turning Head Over Shoulder)", 
    "Squatting or Sitting in a Casual Pose", "Resting Chin on Hand (Relaxed Pose)", "Eyes Closed in Peaceful Expression", 
    "Jumping with a Big Smile", "Windblown Hair Movement", "Looking Over the Shoulder", "Sitting on the Floor with Legs Crossed", 
    "Arm Raised in Triumph", "Holding a Prop (e.g., flower, umbrella, book)", "Hand on Face (Thoughtful Look)", 
    "Looking Down (Deep in Thought)", "Reaching Up or Reaching for Something", "Shying Away or Looking Around Nervously", 
    "Contorted/Abstract Body Poses (Fine Art Focus)"
];

// Function to generate a random photoshoot idea
function generatePhotoshoot() {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const wardrobe = wardrobes[Math.floor(Math.random() * wardrobes.length)];
    const lightingType = lighting[Math.floor(Math.random() * lighting.length)];
    const pose = poses[Math.floor(Math.random() * poses.length)];

    // Display the generated idea
    document.getElementById("theme").innerText = theme;
    document.getElementById("location").innerText = location;
    document.getElementById("wardrobe").innerText = wardrobe;
    document.getElementById("lighting").innerText = lightingType;
    document.getElementById("pose").innerText = pose;

    // Show the idea div
    document.getElementById("photoshootIdea").style.display = "block";
}

// Add event listener to the button
document.getElementById("generateButton").addEventListener("click", generatePhotoshoot);
