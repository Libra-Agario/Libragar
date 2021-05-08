// == UserScript ==
// @name          XC, T, CONTROL
// @ sürüm       1.0
// @description   Vanilya istemciye X, C, T ve P anahtarlarını ekler
// @ yazar        RCZ-AGARIO
// @match         *: //agar.io/*
// @         hiçbiri
// @run -at belge-başlangıcı
// == / UserScript ==
pencere . __WebSocket  =  pencere . WebSocket ;
pencere . _WebSocket  =  pencere . WebSocket  =  function ( ip )  {
     yeni  pencereye dön . fakeWebSocket ( ip ) ;
} ;
pencere . key  =  {
    x : yanlış ,
    c : yanlış ,
    t : yanlış ,
} ;
pencere . addEventListener ( "load" ,  function ( )  {
    OldSocket  =  pencere . __WebSocket ;
    pencere . WebSocket  =  pencere . fakeWebSocket  =  function ( ip )  {
        var  fakeWS  =  { } ;
        var  ws  =  new  OldSocket ( ip ) ;
        ws . binaryType  =  "arraybuffer" ;
        için  ( var  i  içinde  ws )  fakeWS [ i ]  =  si [ i ] ;
        fakeWS . gönder  =  işlev ( )  {
            eğer  ( pencere . tuşu . x ) {
                argümanlar [ 0 ]  =  yeni  Int8Array ( 1 ) ;
                bağımsız değişkenler [ 0 ] [ 0 ]  =  22 ;
            }  else  if  ( pencere . tuşu . c ) {
                argümanlar [ 0 ]  =  yeni  Int8Array ( 1 ) ;
                bağımsız değişkenler [ 0 ] [ 0 ]  =  23 ;
            }  else  if  ( pencere . anahtar . t ) {
                argümanlar [ 0 ]  =  yeni  Int8Array ( 1 ) ;
                bağımsız değişkenler [ 0 ] [ 0 ]  =  24 ;
            }  else  if  ( pencere . tuşu . p )  {
                argümanlar [ 0 ]  =  yeni  Int8Array ( 1 ) ;
                bağımsız değişkenler [ 0 ] [ 0 ]  =  25 ;
            }
            pencere . anahtar  =  { } ;
            dönüş  ws . gönder . uygula ( ws ,  argümanlar ) ;
        } ;
        ws . onmessage  =  function ( )  {
            fakeWS . onmessage  &&  fakeWS . onmessage . uygula ( ws ,  argümanlar ) ;
        } ;
        ws . onopen  =  function ( )  {
            fakeWS . readyState  =  1 ;
            fakeWS . onopen . uygula ( ws ,  argümanlar ) ;
        } ;
        geri  fakeWS ;
    } ;
} ) ;
belge . addEventListener ( 'keydown' ,  function ( e )  {
    eğer  ( örn . keyCode  ==  88 )  penceresi . anahtar . x  =  doğru ;
    eğer  ( örn . keyCode  ==  67 )  penceresi . anahtar . c  =  doğru ;
    eğer  ( örn . keyCode  ==  84 )  penceresi . anahtar . t  =  true ;
} ) ;