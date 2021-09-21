
 //now i click album-poster id get current song id
    $(".album-poster").on('click', function(e){
      var dataSwitchId = $(this).attr('data-switch');
      //console.log(dataSwitchId);

      //and now i use aplayer switch funtion see
      ap.list.switch(dataSwitchId); //this is static id but i use dynamic

      //aplayer play function
      //when i click any song to play
      ap.play();

      //click to slideup player see
      $("#aplayer").addClass('showPlayer');
   });


  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded:true,
    audio: [
      {
        name: 'On My Way',
        artist: 'Artist Alan Walker',
        url: 'assets/img/Alan_Walker_ On_My_Way.mp3',
        cover: 'assets/img/m1.jpg'
    },
    {
        name: 'Axwell Λ Ingrosso - On My Way',
        artist: 'Artist Alan Walker',
        url: 'assets/img/Axwell_A_Ingrosso - On My Way.mp3',
        cover: 'assets/img/m2.jpg'
    },
    {
        name: 'Giovanca - On My Way',
        artist: 'Artist Alan Walker',
        url: 'assets/img/Giovanca - On My Way.mp3',
        cover: 'assets/img/m3.jpg'
    },
    {
        name: 'Axwell Λ Ingrosso feat. Salem Al Faker - On My Way',
        artist: 'Artist Alan Walker',
        url: 'assets/img/Axwell_Ingrosso feat. Salem Al Faker - On My Way.mp3',
        cover: 'assets/img/m4.jpg'
    },
    {
        name: 'Tiesto feat.Bright Sparks - On My Wayy',
        artist: 'Artist Alan Walker',
        url: 'assets/img/Tiesto feat.Bright Sparks - On My Way.mp3',
        cover: 'assets/img/m5.jpg'
    },
    {
        name: 'Cocoon - On My Way',
        artist: 'Artist Alan Walker',
        url: 'assets/img/Cocoon - On My Way.mp3',
        cover: 'assets/img/m6.jpg'
    },
  ]
});
 
