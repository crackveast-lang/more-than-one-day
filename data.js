/* =====================================================================
   EDIT EVERYTHING HERE.  This is the only file you need to touch.
   - Change any text inside the quotes " ".
   - To swap a photo, change the number in "photos/img05.jpg".
   - Keep the commas and quotes exactly where they are.
   ===================================================================== */

const DATA = {

  names: { her: "Akriti", me: "Sushant" },

  /* The blurred photo behind the very first screen (one of you two) */
  landingPhoto: "photos/img01.jpg",

  /* ---- CHAPTER 2 : Why You Matter (big text + a photo each) ---- */
  whyYouMatter: [
    {
      text: "you became my safest place.",
      photo: "photos/img30.jpg",
      caption: "waise pic dekh kar safe place lag nhi rha but devi ji belive it is my safe place"
    },
    {
      text: "your smile fixes days you don't even know were broken.",
      photo: "photos/img27.jpg",
      caption: "your smile made my day and jo ek inner peace milta h aapko khus dekh kar... it's priceless"
    },
    {
      text: "every ordinary day somehow becomes my favorite when you're in it.",
      photo: "photos/img15.jpg",
      caption: "koi khaas din nhi hota... par aap saath ho toh har normal din mera favourite ban jata h ❤️"
    }
  ],

  /* ---- CHAPTER 3 : Our Story (give each memory a TITLE, not a date) ---- */
  memories: [
    { title: "The Beginning",   photo: "photos/img05.jpg", text: "I didn't know it then, but this picture started becoming one of my favorite memories. that's why main isse bhot jyada bhejta tha DM's ma... bina baat ka bhi...." },
    { title: "The Laugh",       photo: "photos/img07.jpg", text: "because yaha ham dono alien lag rhe the and plus aapne rapido wala bol diya tha.... it was so gooooddddd ykkkkkk" },
    { title: "The Chaos",       photo: "photos/img56.jpg", text: "iss pic ko click krna ka chakkar ma phone bhot bar gira mera and screen gaurd bhi toot gya tha... but that's really good pose and moment cudiee" },
    { title: "The Comfort",     photo: "photos/img18.jpg", text: "now point I started to become way way way way way comfortable and you already why my sweet heart" },
    { title: "Our First Date",  photo: "photos/img13.jpg", text: "Our first date with all of emtion mix happy, sad, anger, promise, hope... it's not a perfect date but it was a date with pure emotions" },
    { title: "The Silly One",   photo: "photos/img11.jpg", text: "You make me laugh in a way I forget to be serious about anything." },
    { title: "The Quiet Day",   photo: "photos/img12.jpg", text: "No plans, no reason. Just you and a slow afternoon." },
    { title: "The Look",        photo: "photos/img51.jpg", text: "when you look at me like this and I forget everytime what I was saying" },
    { title: "The Us",          photo: "photos/img16.jpg", text: "Nothing was happening here. That's exactly why I love it." },
    { title: "The Comfort Zone",photo: "photos/img08.jpg", text: "With you I don't have to perform. I just get to be." },
    { title: "Aloo de paronthe",photo: "photos/img01.jpg", text: "on this day you made aloo de paronthe for me {don't give me reality check, i'm happy with this....}" },
    { title: "Sassy melody and pulse", photo: "photos/img33.jpg", text: "that's pic is so much aesthetic if I want to soft launch I'll probably go with this image cudiee" },
    { title: "Big DIhh",        photo: "photos/img55.jpg", text: "so as you ek brr dihh size is equal to hand size so... we have the answer who's dihh is... ifykyk" },
    { title: "The Favorite",    photo: "photos/img53.jpg", text: "If I had to keep only one memory, I'd fight to keep this one." },
    { title: "The Now",         photo: "photos/img23.jpg", text: "And it keeps getting better. Every single day with you." },
    { title: "The Always",      photo: "photos/img24.jpg", text: "Whatever comes next, I want it to have you in it." }
  ],

  /* ---- CHAPTER 4 : Things I'll Always Love About You (cards) ---- */
  loveCards: [
    "Your side killer smile with eye rolling to side.",
    "How excited you get over little things.",
    "Your singing voice note [but aap ab bhejte nhi].",
    "Your stubbornness.",
    "How you make everything feel okay.",
    "The way you care.",
    "Every version of you."
  ],

  /* ---- CHAPTER 5 : Hidden Notes (each star opens a mini letter) ----
     Add a photo to a note, or set photo to "" for a text-only note. */
  hiddenNotes: [
    { photo: "photos/img25.jpg", note: "You looked so pretty this day." },
    { photo: "photos/img26.jpg", note: "You have no idea how nervous I was here." },
    { photo: "photos/img27.jpg", note: "This is secretly my favorite picture of you." },
    { photo: "photos/img40.jpg", note: "I still replay this day in my head." },
    { photo: "photos/img29.jpg", note: "I fell a little harder right about here." },
    { photo: "photos/img30.jpg", note: "I could look at this smile forever." },
    { photo: "photos/img31.jpg", note: "This is the version of you I miss when you're not around." },
    { photo: "photos/img59.jpg?r=2", note: "I zoomed in on your face when you sent me this." },
    { photo: "photos/img33.jpg", note: "You were so happy here and it made me so happy." },
    { photo: "photos/img34.jpg", note: "I kept this one just for me." },
    { photo: "photos/img35.jpg", note: "Every time I see this I want to hug you." },
    { photo: "photos/img36.jpg", note: "You didn't know I was looking. You were glowing." },
    { photo: "photos/img37.jpg", note: "This is what safe feels like." },
    { photo: "photos/img38.jpg", note: "I'd relive this exact moment a hundred times." },
    { photo: "photos/img39.jpg", note: "You are so much prettier than you think." },
    { photo: "photos/img28.jpg", note: "This day is stitched into my favorite memories." },
    { photo: "photos/img09.jpg", note: "I love the way you were looking at me here." },
    { photo: "photos/img58.jpg", note: "I got butterflies re-reading this moment." },
    { photo: "photos/img57.jpg", note: "I just want to hold your hold like this and sit hours with you my babygirl" },
    { photo: "photos/img44.jpg", note: "You. Always you." }
  ],

  /* The last photo, in the near-black final chapter (your best one of her) */
  finalPhoto: "photos/img45.jpg",

  /* ---- SECRET ENDING : the handwritten letter (600-800 words) ----
     Written for you to edit into your own voice. The [brackets] are
     spots to make it personal, but you can rewrite any of it. */
  letter: `Akriti my love my cudiee,

see cudiee don't change this letter maine ya 4-5 brr rewrite krka likh and issi wjha sa main aapko tab nhi bhej paya tha because ye letter complete nhi tha and now it is done.... so here's the letter with my honest stuff....

I forgot Girlfriend Day. I forgot the one day that was supposed to be about you, and I hate that it hurt you. I'm not writing all of this to make the guilt go away.

You are the best thing that has happened to me, and it isn't even close. yrr I just start loving somone after all the fucked up my past... maine IG start krr diya jisse I hate most to use sach ma... i don't like to use instagram...

on 24 dec, 2025 when I first talked to you in corridor, that moment... I didn't know then that you'd end up being the person I want to tell everything to first, the good news and the stupid news and the two-in-the-morning news, talking till morningn sunshine... just saying love you for hours...

You taught me things I didn't even know I needed to learn. You taught me that it's okay to be soft, that I don't always have to have it together, that I can just be myself and that's enough for you. Before you, I don't think I really believed that. You made me believe it without ever making a lecture out of it.

btw upper wali line maine gpt sa english improve karayi h so don't judge omkey cudiee... because meri bhi english itni aachi nhi h....

My baacha I can't go back and fix aug 1. I can't post the story I should have posted or say the words at the exact right hour not jab aap sleepy the. That day is gone and I can't reach it my sweedie. But I can promise you the thing that actually matters my bby, which is all the days after it. I can love you better today, and tomorrow, and  boring Wednesday three weeks from now when nothing special is happening my sweedie pie.

Here's what I hope for us my baacha. I hope we keep collecting these ordinary days until we have thousands of them.

my sweed lil kinderjoy at the end of the day i say and close my letter with line that I say very first date

I Hope i'm also worth waiting too...`

};
