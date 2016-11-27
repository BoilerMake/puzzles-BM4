const word_pool = ["echo", "mumblecore", "pug", "venmo", "tattooed", "biodiesel", "kickstarter", "scenester", "bespoke", "franzen", "meggings", "normcore", "hashtag", "PBR&B", "helvetica", "gastropub", "chillwave", "lo-fi", "flexitarian", "pour-over", "pabst", "gluten-free", "marfa", "leggings", "ramps", "kombucha", "twee", "cliche", "crucifix", "readymade", "cliche", "post-ironic", "portland", "gentrify", "everyday", "beard", "chartreuse", "narwhal", "carry", "disrupt", "authentic", "actually", "post-ironic", "hoodie", "health", "farm-to-table", "knausgaard", "lomo", "truffaut", "chillwave", "chicharrones", "pickled", "artisan", "kinfolk", "8-bit", "cred", "Godard", "meh", "bespoke", "loko", "forage", "vegan", "squid", "whatever", "Yuccie", "poutine", "XOXO", "distillery", "fixie", "literally", "brooklyn", "retro", "Yuccie", "stumptown", "try-hard", "polaroid", "sartorial", "organic", "roof", "ethical", "Godard", "pug", "swag", "paleo", "brooklyn", "health", "ennui", "YOLO", "vice", "offal", "quinoa", "gastropub", "squid", "kogi", "cray", "sriracha", "aesthetic", "chambray", "cornhole", "kinfolk", "cronut", "letterpress", "locavore", "vinyl", "tumblr", "echo", "drinking", "etsy", "park", "keffiyeh", "waistcoat", "williamsburg", "bushwick", "heirloom", "humblebrag", "ugh", "seitan", "tacos", "mlkshk", "celiac", "freegan", "keytar", "swag", "austin", "pitchfork", "migas", "meggings", "everyday", "gentrify", "cold-pressed", "meggings", "kitsch", "etsy", "occupy", "DIY", "sriracha", "fap", "lumbersexual", "mixtape", "sustainable", "Thundercats", "street", "hella", "iPhone", "tousled", "viral", "neutra", "meditation", "bitters", "listicle", "kogi", "chia", "meggings", "pop-up", "vinegar", "pinterest", "meditation", "cleanse", "intelligentsia", "church-key", "schlitz", "narwhal", "synth", "fingerstache", "yr", "typewriter", "shoreditch", "+1", "selvage", "microdosing", "health", "wolf", "dreamcatcher", "master", "cardigan", "butcher", "knausgaard", "wayfarers", "sustainable", "90's", "blog", "brunch", "tilde", "plaid", "asymmetrical", "listicle", "flannel", "slow-carb", "banjo", "VHS", "polaroid", "mustache", "taxidermy", "hammock", "irony", "selfies", "tofu", "umami", "skateboard", "goth"];

const WordPool = {
  generate: (number_of_words, number, offset) => {
    let generated = [];
    for(let i = 0; i < number_of_words; i++) {
      generated.push(
        word_pool[(i + offset + number) % word_pool.length]
      );
    }
    return generated;
  }
};

module.exports = WordPool;
