 /**
  * Created by PC on 2018/3/12.
  */
 $("#qxAddBili").click(function () {
     $("#addBili").css("display", "none");
 })
 $('#chiCun1Width').on('keyup', function () {
     var a = parseInt($("section").css("width")) - 30;
     var v = $(this).val();
     if (v > a) {
         $(this).val(a);
     }
 });
 $('#chiCun1Height').on('keyup', function () {
     var a = parseInt($("section").css("height")) - 30;
     var v = $(this).val();
     if (v > a) {
         $(this).val(a);
     }
 });
 $('#zdyWidth').on('keyup', function () {
     var a = parseInt($("section").css("width")) - 30;
     var v = $(this).val();
     if (v > a) {
         $(this).val(a);
     }
 });
 $('#zdyHeight').on('keyup', function () {
     var a = parseInt($("section").css("height")) - 30;
     var v = $(this).val();
     if (v > a) {
         $(this).val(a);
     }
 });
 var arr = [];
 var arrBack = [];
 var arrWidth = [];
 var arrHeight = [];
 var arrBackWidth = [];
 var arrBackHeight = [];
 var arrZhuan = [];
 $('input[type=range]').val(0);
 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');
 var widthZhuan = 0;
 var heightZhuan = 0;
 var img = new Image();
 img.crossOrigin = '';

 function editImg(a) {
     img.src = a;
     $("#yuan")[0].src = a;
     $('input[type=range]').val(0);
     $(".xiangXiValue").html("0");
     arr.length = 0;
     arrBack.length = 0;
     arrWidth.length = 0;
     arrHeight.length = 0;
     arrBackWidth.length = 0;
     arrBackHeight.length = 0;
     $("#canvas").css("left", "8px");
     $("#canvas").css("top", "45px");
     img.onload = function () {
         var x = $("")
         var duiBiwidth = 0;
         var duiBiheight = 0;
         /*      630 871          alert($("#duiBi").css("height"));*/
         if (img.width > 1400 && img.height <= 800) {
             duiBiwidth = 1400;
             duiBiheight = parseInt((1400 / img.width) * img.height);
         } else if (img.width <= 1400 && img.height > 800) {
             duiBiwidth = parseInt((800 / img.height) * img.width);
             duiBiheight = 800;
         } else if (img.width <= 1400 && img.height <= 800) {
             duiBiwidth = img.width;
             duiBiheight = img.height;
         } else {
             duiBiwidth = 1400;
             duiBiheight = parseInt((1400 / img.width) * img.height);
             if (duiBiheight > 800) {
                 duiBiwidth = parseInt((800 / img.height) * img.width);
                 duiBiheight = 800;
             }
         }
         canvas.width = duiBiwidth;
         canvas.height = duiBiheight;
         ctx.drawImage(img, 0, 0, duiBiwidth, duiBiheight);
         $("#chiCun").html(duiBiwidth + " X " + duiBiheight);
         Caman('#canvas', function () {
             this.replaceCanvas(canvas);
         });
     }
 }



 /* 如果跨域，需要相关支持 */
 var $reset = $('#resetbtn');
 var $brightness = $('#brightnessbtn');
 var $brightness1 = $('#brightnessbtn1');
 var $youHuabtn = $("#youHuabtn");
 var $noise = $('#noisebtn');
 var $sepia = $('#sepiabtn');
 var $contrast = $('#contrastbtn');
 var $color = $('#colorbtn');
 var $exposure = $("#exposurebtn");
 var $vintage = $('#vintagebtn');
 var $lomo = $('#lomobtn');
 var $emboss = $('#embossbtn');
 var $tiltshift = $('#tiltshiftbtn');
 var $radialblur = $('#radialblurbtn');
 var $edgeenhance = $('#edgeenhancebtn');
 var $posterize = $('#posterizebtn');
 var $clarity = $('#claritybtn');
 var $orangepeel = $('#orangepeelbtn');
 var $sincity = $('#sincitybtn');
 var $sunrise = $('#sunrisebtn');
 var $crossprocess = $('#crossprocessbtn');
 var $hazydays = $('#hazydaysbtn');
 var $love = $('#lovebtn');
 var $grungy = $('#grungybtn');
 var $jarques = $('#jarquesbtn');
 var $pinhole = $('#pinholebtn');
 var $oldboot = $('#oldbootbtn');
 var $glowingsun = $('#glowingsunbtn');
 var $hdr = $('#hdrbtn');
 var $oldpaper = $('#oldpaperbtn');
 var $pleasant = $('#pleasantbtn');
 var $save = $('#savebtn');

 $('.camanJS').change(applyFilters);
 $(".chongZhi").click(function () {
     $(this).parent().children("input").val(0);
     $(this).parent().children(".xiangXiValue").html(0);
     var thisVal = $(this).val();
     $(this).prev().html(thisVal);
     applyFilters1();
     $("#left").css("display", "block");
     $("#right").css("display", "block");
     $("#UD").css("display", "block");
     $("#LR").css("display", "block");
 })

 function applyFilters1() {
     $("#duiBi").css("display", "none");
     var red = parseInt($('#red').val());
     var green = parseInt($('#green').val());
     var blue = parseInt($('#blue').val());
     var stackBlur = parseInt($('#stackBlur').val());
     var saturation = parseInt($('#saturation').val());
     var brightness = parseInt($('#brightness').val());
     var hue = parseInt($('#hue').val());
     var cntrst = parseInt($('#contrast').val());
     var vibr = parseInt($('#vibrance').val());
     var sep = parseInt($('#sepia').val());
     var exposure = parseInt($('#exposure').val());
     var noise = parseInt($('#noise').val());
     Caman('#canvas', function () {
         this.channels({
             red: red,
             green: green,
             blue: blue
         }).noise(noise).exposure(exposure).stackBlur(stackBlur).saturation(saturation).brightness(brightness).hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
     });
 }

 function applyFilters() {
     $("#duiBi").css("display", "none");
     var _this = $(this);
     var thisVal = _this.val();
     _this.prev().html(thisVal);
     var red = parseInt($('#red').val());
     var green = parseInt($('#green').val());
     var blue = parseInt($('#blue').val());
     var stackBlur = parseInt($('#stackBlur').val());
     var saturation = parseInt($('#saturation').val());
     var brightness = parseInt($('#brightness').val());
     var hue = parseInt($('#hue').val());
     var cntrst = parseInt($('#contrast').val());
     var vibr = parseInt($('#vibrance').val());
     var sep = parseInt($('#sepia').val());
     var exposure = parseInt($('#exposure').val());
     var noise = parseInt($('#noise').val());
     Caman('#canvas', function () {
         /* this.revert(false);*/
         this.channels({
             red: red,
             green: green,
             blue: blue
         }).noise(noise).exposure(exposure).stackBlur(stackBlur).saturation(saturation).brightness(brightness).hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
     });
 }
 /* 自定义滤镜 */
 Caman.Filter.register("oldpaper", function () {
     this.pinhole();
     this.noise(10);
     this.orangePeel();
     this.render();
 });

 Caman.Filter.register("pleasant", function () {
     this.colorize(60, 105, 218, 10);
     this.contrast(10);
     this.sunrise();
     this.hazyDays();
     this.render();
 });

 function chiCun(width, height) {
     var tempSrc = canvas.toDataURL("image/png");
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     var img = new Image();
     img.crossOrigin = '';
     img.src = tempSrc;
     img.onload = function () {
         canvas.width = width;
         canvas.height = height;
         ctx.drawImage(img, 0, 0, width, height);
     }
     Caman('#canvas', function () {
         this.replaceCanvas(canvas);
     });
     $("#canvas").mousedown(function (e) {
         $("#duiBi").css("display", "none");
         var zhuangTai = $("#canvas").css("cursor");
         if (zhuangTai == "nw-resize") {
             var left = $("#canvas").css("left");
             left = left.substring(0, left.length - 2);
             var top = $("#canvas").css("top");
             top = top.substring(0, top.length - 2);
             startX = parseInt(left);
             startY = parseInt(top);
             tuoZhuai = true;
             mouStartX = e.screenX;
             mouStartY = e.screenY;
             $("#canvas").css("left", left + "px");
             $("#canvas").css("top", top + "px");
         }
     })
     $("section").mousemove(function (e) {
         if (tuoZhuai) {
             var x = e.screenX - mouStartX + startX;
             var secWidth = $("section").css("width");
             secWidth = secWidth.substring(0, secWidth.length - 2);
             var canWidth = $("#canvas").css("width");
             canWidth = canWidth.substring(0, canWidth.length - 2);
             if (x > (secWidth - canWidth)) {
                 x = secWidth - canWidth;
             } else if (x < 0) {
                 x = 0;
             }
             var y = e.screenY - mouStartY + startY;
             var secHeight = $("section").css("height");
             secHeight = secHeight.substring(0, secHeight.length - 2);
             var canHeight = $("#canvas").css("height");
             canHeight = canHeight.substring(0, canHeight.length - 2);
             if (y > (secHeight - canHeight)) {
                 y = secHeight - canHeight;
             } else if (y < 0) {
                 y = 0;
             }
             $("#canvas").css("left", x + "px");
             $("#canvas").css("top", y + "px");
         }
     })
     $("section").mouseup(function (e) {
         if (tuoZhuai) {
             tuoZhuai = false;
             $("#canvas").css("cursor", "default");
             $("#tuoZhuai").css("opacity", "1");
         }
     })
 }
 $reset.on('click', function (e) {
     $('input[type=range]').val(0);
     var img = new Image();
     img.crossOrigin = '';
     img.src = $("#yuan")[0].src;
     img.onload = function () {
         var x = $("")
         var duiBiwidth = 0;
         var duiBiheight = 0;
         /*      630 871          alert($("#duiBi").css("height"));*/
         if (img.width > 1400 && img.height <= 800) {
             duiBiwidth = 1400;
             duiBiheight = parseInt((1400 / img.width) * img.height);
         } else if (img.width <= 1400 && img.height > 800) {
             duiBiwidth = parseInt((800 / img.height) * img.width);
             duiBiheight = 800;
         } else if (img.width <= 1400 && img.height <= 800) {
             duiBiwidth = img.width;
             duiBiheight = img.height;
         } else {
             duiBiwidth = 1400;
             duiBiheight = parseInt((1400 / img.width) * img.height);
             if (duiBiheight > 800) {
                 duiBiwidth = parseInt((800 / img.height) * img.width);
                 duiBiheight = 800;
             }
         }
         canvas.width = duiBiwidth;
         canvas.height = duiBiheight;
         ctx.drawImage(img, 0, 0, duiBiwidth, duiBiheight);
         $("#chiCun").html(duiBiwidth + " X " + duiBiheight);
         Caman('#canvas', function () {
             this.replaceCanvas(canvas);
         });
     }
     $(".xiangXiValue").html("0");
     arr = [];
     arrBack = [];
     arrBackWidth = [];
     arrBackHeight = [];
     arrWidth = [];
     arrHeight = [];
     arrZhuan = [];

 });

 /* In built filters */
 $youHuabtn.on("click", function (e) {
     $("#duiBi").css("display", "none");
     var flag = this.flag;
     if (!flag) {
         Caman('#canvas', function () {
             this.brightness(10).contrast(10).clarity().render();
         });
     }
 })
 $brightness.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.brightness(10).render();
     });
 });
 $brightness1.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.brightness(-10).render();
     });
 });
 $exposure.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.exposure(10).render();
     });
 });
 $noise.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.noise(10).render();
     });
 });
 $contrast.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.contrast(10).render();
     });
 });
 $sepia.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.sepia(20).render();
     });
 });
 $color.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.colorize(60, 105, 218, 10).render();
     });
 });
 $vintage.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.vintage().render();
     });
 });
 $lomo.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.lomo().render();
     });
 });
 $emboss.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.emboss().render();
     });
 });
 $tiltshift.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.tiltShift({
             angle: 90,
             focusWidth: 600
         }).render();
     });
 });
 $radialblur.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.radialBlur().render();
     });
 });
 $edgeenhance.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.edgeEnhance().render();
     });
 });
 $posterize.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.posterize(8, 8).render();
     });
 });
 $clarity.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.clarity().render();
     });
 });
 $orangepeel.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.orangePeel().render();
     });
 });
 $sincity.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.sinCity().render();
     });
 });
 $sunrise.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.sunrise().render();
     });
 });
 $crossprocess.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.crossProcess().render();
     });
 });
 $love.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.love().render();
     });
 });
 $grungy.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.grungy().render();
     });
 });
 $jarques.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.jarques().render();
     });
 });
 $pinhole.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.pinhole().render();
     });
 });
 $oldboot.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.oldBoot().render();
     });
 });
 $glowingsun.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.glowingSun().render();
     });
 });
 $hazydays.on('click', function (e) {
     $("#duiBi").css("display", "none");
     Caman('#canvas', function () {
         this.hazyDays().render();
     });
 });

 /* 多次调用滤镜 */
 $hdr.on('click', function (e) {
     Caman('#canvas', function () {
         this.contrast(10);
         this.contrast(10);
         this.jarques();
         this.render();
     });
 });

 /* 自定义滤镜 */
 $oldpaper.on('click', function (e) {
     Caman('#canvas', function () {
         this.oldpaper();
         this.render();
     });
 });
 $pleasant.on('click', function (e) {
     Caman('#canvas', function () {
         this.pleasant();
         this.render();
     });
 });

 /* 支持点击保存文件 */

 $save.on('click', function (e) {

     Caman('#canvas', function () {
         this.render(function () {
             this.save('png');
         });
     });
 });

 $("#youHuabtn")[0].flag = 0;
 $("aside ul li").click(function () {
     var flag = $(this).next().css("display");
     var sanJiao = $(this).children(".sanJiao1");
     if (flag == "none") {
         $(".xiangXi").css("display", "none");
         $("aside li").css("border-bottom", "2px rgba(0,0,0,0) solid");
         $(".sanJiao1").css("transform", "rotate(90deg)");
         $(this).next().css("display", "block");
         $(this).css("border-bottom", "0px");
         sanJiao.css("transform", "rotate(180deg)");
     } else {
         $(this).next().css("display", "none");
         $(this).css("border-bottom", "2px rgba(0,0,0,0) solid");
         sanJiao.css("transform", "rotate(90deg)");
     }
 })
 var aLi = document.getElementsByClassName("listLi");
 var aLiContent = document.getElementsByClassName("liContent");
 for (var i = 3; i < 6; i++) {
     aLi[i].num = i - 3;
     aLi[i].onmouseover = function () {
         var x = this.num;
         show(x);
     }
     aLi[i].onmouseout = function () {
         var x = this.num;
         hidden(x);
     }
 }

 function show(x) {
     aLiContent[x].style.display = "block";
 }

 function hidden(x) {
     aLiContent[x].style.display = "none";
 }
 $("#chiCun1btn1").click(function () {
     $("#duiBi").css("display", "none");
     var width = $("#chiCun1Width").val();
     var height = $("#chiCun1Height").val();


     var duiBiwidth = 0;
     var duiBiheight = 0;
     /*      630 871          alert($("#duiBi").css("height"));*/
     if (width > 1400 && height <= 800) {
         duiBiwidth = 1400;
         duiBiheight = parseInt((1400 / width) * height);
     } else if (width <= 1400 && height > 800) {
         duiBiwidth = parseInt((800 / height) * width);
         duiBiheight = 800;
     } else if (width <= 1400 && height <= 800) {
         duiBiwidth = width;
         duiBiheight = height;
     } else {
         duiBiwidth = 1400;
         duiBiheight = parseInt((1400 / width) * height);
         if (duiBiheight > 800) {
             duiBiwidth = parseInt((800 / height) * width);
             duiBiheight = 800;
         }
     }



     if (width != "" && height != "") {
         $("#chiCun").html(duiBiwidth + " X " + duiBiheight);
         chiCun(duiBiwidth, duiBiheight);
         $('#chiCun1Width').val(duiBiwidth);
         $('#chiCun1Height').val(duiBiheight);
     }
 })
 $("#chiCun1btn2").click(function () {
     $("#chiCun1Width").val("");
     $("#chiCun1Height").val("");
     $("#suoDingCheck")[0].checked = "checked";
     /*$("#chiCun1Range").val(0);
      $("#chiCun1RangeNum").html("100%");*/
     $("#chiCun1Height")[0].disabled = "";
     $("#chiCun1Width")[0].disabled = "";
 })
 $("#chiCun1Width").change(function () {
     var flag;
     if ($("#suoDingCheck")[0].checked == true) {
         flag = 1;
     } else {
         flag = 0;
     }
     var biLi = parseFloat(canvas.width / canvas.height);
     if (flag) {
         $("#chiCun1Height")[0].disabled = "disabled";
         var width = $("#chiCun1Width").val();
         var height = parseInt(width / biLi);
         $("#chiCun1Height").val(height);
     }
 })
 $("#chiCun1Height").change(function () {
     var flag;
     if ($("#suoDingCheck")[0].checked == true) {
         flag = 1;
     } else {
         flag = 0;
     }
     var biLi = parseFloat(img.width / img.height);
     if (flag) {
         $("#chiCun1Width")[0].disabled = "disabled";
         var height = $("#chiCun1Width").val();
         var width = parseInt(height * biLi);
         $("#chiCun1Width").val(width);
     }
 })
 $("#suoDingCheck").change(function () {
     var flag;
     if ($("#suoDingCheck")[0].checked == true) {
         flag = 0
     } else {
         flag = 1
     }
     if (flag) {
         $("#chiCun1Height")[0].disabled = "";
         $("#chiCun1Width")[0].disabled = "";
     } else {
         $("#chiCun1Width").val("");
         $("#chiCun1Height").val("");
     }
 })
 $("#caoZuo1 input").change(function () {
     var a = parseInt($("#caoZuo1 input").val()) + 100;

     var html = $("#chiCun").html().split("X");
     var x = html[0];
     var y = html[1];
     var width = parseInt(x * a / 100);
     var height = parseInt(y * a / 100);
     var flag = true;


     /*      630 871          alert($("#duiBi").css("height"));*/
     if (width > 1400 || height > 800) {
         flag = false;
     }
     if (width < 50 || height < 50) {
         flag = false;
     }
     if (flag) {
         $("#chiCun").html(width + " X " + height);
         chiCun(width, height);
         $("#caoZuoBili").html(a);
     } else {
         alert("图片大小超出限制");
     }
     $("#caoZuo1 input").val(0);
 })

 function left() {
     $("#duiBi").css("display", "none");
     var tempSrc = canvas.toDataURL("image/png");
     var width = canvas.width;
     var height = canvas.height;
     canvas.width = height;
     canvas.height = width;
     $("#chiCun").html(canvas.width + " X " + canvas.height);
     var x = canvas.width / 2; //画布宽度的一半
     var y = canvas.height / 2; //画布高度的一半
     var img = new Image();
     img.crossOrigin = '';
     img.src = tempSrc;
     img.onload = function () {
         ctx.translate(x, y); //将绘图原点移到画布中点
         ctx.rotate((Math.PI / 180) * -90); //旋转角度
         ctx.translate(-y, -x); //将画布原点移动
         ctx.drawImage(img, 0, 0); //绘制图片
         ctx.translate(-y, -x); //将画布原点移动
         arrZhuan.push("left");
         var middle = canvas.toDataURL("image/png");
         $("#middle").html(middle);
         Caman('#canvas', function () {
             this.replaceCanvas(canvas);
         });
     }
 }

 function right() {
     $("#duiBi").css("display", "none");
     var tempSrc = canvas.toDataURL("image/png");
     var width = canvas.width;
     var height = canvas.height;
     canvas.width = height;
     canvas.height = width;
     $("#chiCun").html(canvas.width + " X " + canvas.height);
     var x = canvas.width / 2; //画布宽度的一半
     var y = canvas.height / 2; //画布高度的一半
     var img = new Image();
     img.crossOrigin = '';
     img.src = tempSrc;
     img.onload = function () {
         ctx.translate(x, y); //将绘图原点移到画布中点
         ctx.rotate((Math.PI / 180) * 90); //旋转角度
         ctx.translate(-y, -x); //将画布原点移动
         ctx.drawImage(img, 0, 0); //绘制图片
         arrZhuan.push("right");
         var middle = canvas.toDataURL("image/png");
         $("#middle").html(middle);
         Caman('#canvas', function () {
             this.replaceCanvas(canvas);
         });
     }
 }

 function LR() {
     $("#duiBi").css("display", "none");
     var tempSrc = canvas.toDataURL("image/png");
     var img = new Image();
     img.crossOrigin = '';
     img.src = tempSrc;
     img.onload = function () {
         if (arrZhuan[arrZhuan.length - 1] == "right") {
             var x = canvas.width / 2; //画布宽度的一半
             var y = canvas.height / 2;
             ctx.clearRect(0, 0, canvas.height, canvas.width); //先清掉画布上的内容
             ctx.translate(0, canvas.width);
             ctx.rotate((Math.PI / 180) * -90);
             ctx.translate(canvas.width, 0);
             ctx.scale(-1, 1);
             ctx.drawImage(img, 0, 0);
             arrZhuan.push("LR");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         } else if (arrZhuan[arrZhuan.length - 1] == "left") {
             var x = canvas.width / 2; //画布宽度的一半
             var y = canvas.height / 2;
             ctx.translate(y, x);
             ctx.clearRect(0, 0, canvas.height, canvas.width); //先清掉画布上的内容
             ctx.translate(canvas.height, 0);
             ctx.rotate((Math.PI / 180) * 90);
             ctx.scale(-1, 1);
             ctx.translate(-canvas.width, 0);
             ctx.drawImage(img, 0, 0);
             arrZhuan.push("LR");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         } else if (arrZhuan[arrZhuan.length - 1] == "UD") {
             ctx.clearRect(0, 0, canvas.width, canvas.height); //先清掉画布上的内容
             ctx.translate(canvas.width, canvas.height);
             ctx.scale(-1, -1);
             ctx.drawImage(img, 0, 0);
             var middle = canvas.toDataURL("image/png");
             $("#middle").html(middle);
             arrZhuan.push("LR");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         } else if (arrZhuan[arrZhuan.length - 1] == "LR") {
             ctx.clearRect(0, 0, canvas.width, canvas.height); //先清掉画布上的内容
             ctx.scale(1, 1);
             ctx.drawImage(img, 0, 0);
             var middle = canvas.toDataURL("image/png");
             $("#middle").html(middle);
             arrZhuan.push("LR");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         } else {
             ctx.clearRect(0, 0, canvas.width, canvas.height); //先清掉画布上的内容
             ctx.translate(canvas.width, 0);
             ctx.scale(-1, 1);
             ctx.drawImage(img, 0, 0);
             var middle = canvas.toDataURL("image/png");
             $("#middle").html(middle);
             arrZhuan.push("LR");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         }
     }

 }

 function UD() {
     $("#duiBi").css("display", "none");
     var tempSrc = canvas.toDataURL("image/png");
     var img = new Image();
     img.crossOrigin = '';
     img.src = tempSrc;
     img.onload = function () {
         if (arrZhuan[arrZhuan.length - 1] == "right") {
             var x = canvas.width / 2; //画布宽度的一半
             var y = canvas.height / 2;
             ctx.clearRect(0, 0, canvas.height, canvas.width); //先清掉画布上的内容
             ctx.translate(0, canvas.width);
             ctx.rotate((Math.PI / 180) * -90);
             ctx.translate(0, canvas.height);
             ctx.scale(1, -1);
             ctx.drawImage(img, 0, 0);
             arrZhuan.push("UD");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         } else if (arrZhuan[arrZhuan.length - 1] == "left") {
             var x = canvas.width / 2; //画布宽度的一半
             var y = canvas.height / 2;
             ctx.translate(y, x);
             ctx.clearRect(0, 0, canvas.height, canvas.width); //先清掉画布上的内容
             ctx.translate(canvas.height, 0);
             ctx.rotate((Math.PI / 180) * 90);
             ctx.scale(1, -1);
             ctx.translate(0, -canvas.height);
             ctx.drawImage(img, 0, 0);
             arrZhuan.push("UD");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         } else if (arrZhuan[arrZhuan.length - 1] == "LR") {
             ctx.clearRect(0, 0, canvas.width, canvas.height); //先清掉画布上的内容
             ctx.translate(canvas.width, canvas.height);
             ctx.scale(-1, -1);
             ctx.drawImage(img, 0, 0);
             var middle = canvas.toDataURL("image/png");
             $("#middle").html(middle);
             arrZhuan.push("UD");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         } else if (arrZhuan[arrZhuan.length - 1] == "UD") {
             ctx.clearRect(0, 0, canvas.width, canvas.height); //先清掉画布上的内容
             ctx.scale(1, 1);
             ctx.drawImage(img, 0, 0);
             var middle = canvas.toDataURL("image/png");
             $("#middle").html(middle);
             arrZhuan.push("UD");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         } else {
             ctx.clearRect(0, 0, canvas.width, canvas.height); //先清掉画布上的内容
             ctx.translate(0, canvas.height);
             ctx.scale(1, -1);
             ctx.drawImage(img, 0, 0);
             var middle = canvas.toDataURL("image/png");
             $("#middle").html(middle);
             arrZhuan.push("UD");
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
         }
     }
 }

 $("#left").click(function () {
     $("#duiBi").css("display", "none");
     left();
 })
 $("#right").click(function () {
     $("#duiBi").css("display", "none");
     right();
 })
 $("#UD").click(function () {
     $("#duiBi").css("display", "none");
     UD();
 })
 $("#LR").click(function () {
     $("#duiBi").css("display", "none");
     LR();
 })
 var startCaiJianX = 0;
 var startCaiJianY = 0;
 var mouStartCaiJianX = 0;
 var mouStartCaiJianY = 0;
 var CaiJian = false;
 $("#caiJian li").click(function () {
     $("#duiBi").css("display", "none");
     var string = $(this).attr("index");
     if (string == "") {
         $("#addBili").css("display", "block");
     } else {
         var arrIn = string.split(":");
         $("#jieTu").css("height", arrIn[0]);
         $("#jieTu").css("width", arrIn[1]);
         var canWidth = $("#canvas").css("width");
         canWidth = parseInt(canWidth);
         var canHeight = $("#canvas").css("height");
         canHeight = parseInt(canHeight);
         if (arrIn[0] > canHeight || arrIn[1] > canWidth) {
             alert("裁剪大小超出图片，请重新选择");
             $("#jieTu").css("display", "none");
         } else {
             $("#jieTu").css("display", "block");
         }
         var left = $("#canvas").css("left");
         left = left.substring(0, left.length - 2);
         var top = $("#canvas").css("top");
         top = top.substring(0, top.length - 2);
         $("#jieTu").css("left", left + "px");
         $("#jieTu").css("top", top + "px");
     }
 })
 $("#qdAddBili").click(function () {
     var width = $("#addBili input:eq(0)").val();
     var height = $("#addBili input:eq(1)").val();
     if (width != "" && height != "") {
         $("#caiJian").append("<li index='" + height + ":" + width + "'>" + width + "X" + height + "</li>");
         $("#addBili").css("display", "none");
         $("#caiJian li").click(function () {
             var string = $(this).attr("index");
             if (string == "") {
                 $("#addBili").css("display", "block");
             } else {
                 var arrIn = string.split(":");
                 $("#jieTu").css("height", arrIn[0]);
                 $("#jieTu").css("width", arrIn[1]);
                 var canWidth = parseInt($("#canvas")[0].width);
                 var canHeight = parseInt($("#canvas").css("height"));
                 if (arrIn[0] > canHeight || arrIn[1] > canWidth) {
                     alert("裁剪大小超出图片，请重新选择");
                     $("#jieTu").css("display", "none");
                 } else {
                     $("#jieTu").css("display", "block");
                 }
                 var left = $("#canvas").css("left");
                 left = left.substring(0, left.length - 2);
                 var top = $("#canvas").css("top");
                 top = top.substring(0, top.length - 2);
                 $("#jieTu").css("left", left + "px");
                 $("#jieTu").css("top", top + "px");
             }
         })
     }
 })
 $("#qdAddBili").click(function () {
     $("#addBili input:eq(0)").val("");
     $("#addBili input:eq(1)").val("");
     $("#addBili").css("display", "none");
 })
 $("section").mousedown(function (e) {
     let ele = document.getElementById('jieTu')
     if (e.target === ele) {
         CaiJian = true;
         var left = $("#jieTu").css("left");
         left = left.substring(0, left.length - 2);
         var top = $("#jieTu").css("top");
         top = top.substring(0, top.length - 2);
         startCaiJianX = parseInt(left);
         startCaiJianY = parseInt(top);
         mouStartCaiJianX = e.screenX;
         mouStartCaiJianY = e.screenY;
         $("#jieTu").css("left", left + "px");
         $("#jieTu").css("top", top + "px");
     }
 })
 $("section").mousemove(function (e) {
     let ele = document.getElementById('jieTu')
     if (CaiJian) {
             var x = e.screenX - mouStartCaiJianX + startCaiJianX;
             var jieWidth = $("#jieTu").css("width");
             jieWidth = jieWidth.substring(0, jieWidth.length - 2);
             var canWidth = $("#canvas").css("width");
             canWidth = canWidth.substring(0, canWidth.length - 2);

             if (x > (canWidth - jieWidth + startCaiJianX)) {
                 x = canWidth - jieWidth + startCaiJianX;
             }
             if (x < 8) {
                 x = 8;
             }
             var y = e.screenY - mouStartCaiJianY + startCaiJianY;
             var jieHeight = $("#jieTu").css("height");
             jieHeight = jieHeight.substring(0, jieHeight.length - 2);
             var canHeight = $("#canvas").css("height");
             canHeight = canHeight.substring(0, canHeight.length - 2);
             if (y > (canHeight - jieHeight + startCaiJianY)) {
                 y = canHeight - jieHeight + startCaiJianY;
             }
             if (y < 45) {
                 y = 45;
             }
             $("#jieTu").css("left", x + "px");
             $("#jieTu").css("top", y + "px");
         }
 })
 $("section").mouseup(function (e) {
     let ele = document.getElementById('jieTu')
     if (CaiJian) {

             var jieWidth = $("#jieTu").css("width");
             jieWidth = jieWidth.substring(0, jieWidth.length - 2);
             var jieHeight = $("#jieTu").css("height");
             jieHeight = jieHeight.substring(0, jieHeight.length - 2);
             CaiJian = false;
             $("#jieTu").css("border", "2px #94D852 solid");
             setTimeout(function () {
                 caiJian(jieWidth, jieHeight, e.screenX - mouStartCaiJianX, e.screenY - mouStartCaiJianY);
                 $("#jieTu").css("display", "none");
                 $("#jieTu").css("border", "2px red solid");
                 $("#chiCun").html(jieWidth + " X " + jieHeight);
             }, 500)
     }
 })

 function caiJian(width, height, startX, startY) {
     cjflag = true;
     var tempSrc = canvas.toDataURL("image/png");
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     var img = new Image();
     img.crossOrigin = '';
     img.src = tempSrc;
     img.onload = function () {
         canvas.width = width;
         canvas.height = height;
         ctx.drawImage(img, startX, startY, width, height, 0, 0, width, height);
         Caman('#canvas', function () {
             this.replaceCanvas(canvas);
         });
     }
     $("#canvas").mousedown(function (e) {
         $("#duiBi").css("display", "none");
         var zhuangTai = $("#canvas").css("cursor");
         if (zhuangTai == "nw-resize") {
             var left = $("#canvas").css("left");
             left = left.substring(0, left.length - 2);
             var top = $("#canvas").css("top");
             top = top.substring(0, top.length - 2);
             startX = parseInt(left);
             startY = parseInt(top);
             tuoZhuai = true;
             mouStartX = e.screenX;
             mouStartY = e.screenY;
             $("#canvas").css("left", left + "px");
             $("#canvas").css("top", top + "px");
         }
     })
     $("section").mousemove(function (e) {
         if (tuoZhuai) {
             var x = e.screenX - mouStartX + startX;
             var secWidth = $("section").css("width");
             secWidth = secWidth.substring(0, secWidth.length - 2);
             var canWidth = $("#canvas").css("width");
             canWidth = canWidth.substring(0, canWidth.length - 2);
             if (x > (secWidth - canWidth)) {
                 x = secWidth - canWidth;
             } else if (x < 8) {
                 x = 8;
             }
             var y = e.screenY - mouStartY + startY;
             var secHeight = $("section").css("height");
             secHeight = secHeight.substring(0, secHeight.length - 2);
             var canHeight = $("#canvas").css("height");
             canHeight = canHeight.substring(0, canHeight.length - 2);
             if (y > (secHeight - canHeight)) {
                 y = secHeight - canHeight;
             } else if (y < 45) {
                 y = 45;
             }
             $("#canvas").css("left", x + "px");
             $("#canvas").css("top", y + "px");
         }
     })
     $("section").mouseup(function (e) {
         if (tuoZhuai) {
             tuoZhuai = false;
             $("#canvas").css("cursor", "default");
             $("#tuoZhuai").css("opacity", "1");
         }
     })

     function applyFilters() {
         var _this = $(this);
         var thisVal = _this.val();
         _this.prev().html(thisVal);
         var red = parseInt($('#red').val());
         var green = parseInt($('#green').val());
         var blue = parseInt($('#blue').val());
         var stackBlur = parseInt($('#stackBlur').val());
         var saturation = parseInt($('#saturation').val());
         var brightness = parseInt($('#brightness').val());
         var hue = parseInt($('#hue').val());
         var cntrst = parseInt($('#contrast').val());
         var vibr = parseInt($('#vibrance').val());
         var sep = parseInt($('#sepia').val());
         var exposure = parseInt($('#exposure').val());
         var noise = parseInt($('#noise').val());
         var middle = document.getElementById("middle");
         Caman('#canvas', function () {
             this.channels({
                 red: red,
                 green: green,
                 blue: blue
             }).noise(noise).exposure(exposure).stackBlur(stackBlur).saturation(saturation).brightness(brightness).hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
         });
     }
 }
 $("#tuoZhuai").click(function () {
     $("canvas").css("cursor", "nw-resize");
     $("#tuoZhuai").css("opacity", "0.8");
 })
 var startX = 0;
 var startY = 0;
 var mouStartX = 0;
 var mouStartY = 0;
 var tuoZhuai = false;
 $("#canvas").mousedown(function (e) {
     $("#duiBi").css("display", "none");
     var zhuangTai = $("#canvas").css("cursor");
     if (zhuangTai == "nw-resize") {
         var left = $("#canvas").css("left");
         left = left.substring(0, left.length - 2);
         var top = $("#canvas").css("top");
         top = top.substring(0, top.length - 2);
         startX = parseInt(left);
         startY = parseInt(top);
         tuoZhuai = true;
         mouStartX = e.screenX;
         mouStartY = e.screenY;
         $("#canvas").css("left", left + "px");
         $("#canvas").css("top", top + "px");
     }
 })
 $("#canvas").mousemove(function (e) {
     if (tuoZhuai) {
         var x = e.screenX - mouStartX + startX;
         var secWidth = $("section").css("width");
         secWidth = secWidth.substring(0, secWidth.length - 2);
         var canWidth = $("#canvas").css("width");
         canWidth = canWidth.substring(0, canWidth.length - 2);
         if (x > (secWidth - canWidth)) {
             x = secWidth - canWidth;
         } else if (x < 8) {
             x = 8;
         }
         var y = e.screenY - mouStartY + startY;
         var secHeight = $("section").css("height");
         secHeight = secHeight.substring(0, secHeight.length - 2);
         var canHeight = $("#canvas").css("height");
         canHeight = canHeight.substring(0, canHeight.length - 2);
         if (y > (secHeight - canHeight)) {
             y = secHeight - canHeight;
         } else if (y < 45) {
             y = 45;
         }
         $("#canvas").css("left", x + "px");
         $("#canvas").css("top", y + "px");
     }
 })
 $("#canvas").mouseup(function (e) {
     if (tuoZhuai) {
         tuoZhuai = false;
         $("#canvas").css("cursor", "default");
         $("#tuoZhuai").css("opacity", "1");
     }
 })
 var butSave = document.getElementById("save");
 butSave.onclick = function () {

     var saveHref = document.getElementById("save_href");
     /*
      * 传入对应想要保存的图片格式的mime类型
      * 常见：image/png，image/gif,image/jpg,image/jpeg
      */

     var tempSrc = canvas.toDataURL("image/png");
     saveHref.href = tempSrc;
     setTimeout(function () {
         saveHref.click();
     }, 200);
 };
 $(document).keyup(function (event) {
     if (event.keyCode == 32) {
         var zhuangTai = $("#canvas").css("cursor");
         if (zhuangTai == "nw-resize") {
             tuoZhuai = false;
             $("#canvas").trigger("mouseup");
             $("#canvas").css("cursor", "default");
             $("#tuoZhuai").css("opacity", "1");
         } else {
             $("#tuoZhuai").trigger("click");
         }
     }
 });

 function readFiles(evt) {
     $("#left").css("display", "block");
     $("#right").css("display", "block");
     $("#UD").css("display", "block");
     $("#LR").css("display", "block");
     var files = evt.target.files;
     if (!files) {
         console.log("the file is invaild");
         return;
     }
     for (var i = 0, file; file = files[i]; i++) {
         var thesrc = window.URL.createObjectURL(file);
         var img = new Image();
         img.crossOrigin = '';
         img.src = thesrc;
         $("#yuan")[0].src = thesrc;
         img.onload = function () {
             canvas.width = img.width;
             canvas.height = img.height;
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             Caman('#canvas', function () {
                 this.replaceCanvas(canvas);
             });
             ctx.drawImage(img, 0, 0, img.width, img.height);
             $("#chiCun").html(img.width + " X " + img.height);
             $("#caoZuo1 input")[0].width1 = img.width;
             $("#caoZuo1 input")[0].height1 = img.height;
             $("#chiCun").html(img.width + " X " + img.height);
             widthZhuan = canvas.width;
             heightZhuan = canvas.height;
             var duiBiwidth = 0;
             var duiBiheight = 0;
             /*      630 871          alert($("#duiBi").css("height"));*/
             if (img.width > 1400 && img.height <= 800) {
                 duiBiwidth = 1400;
                 duiBiheight = parseInt((1400 / img.width) * img.height);
             } else if (img.width <= 1400 && img.height > 800) {
                 duiBiwidth = parseInt((800 / img.height) * img.width);
                 duiBiheight = 800;
             } else if (img.width <= 1400 && img.height <= 800) {
                 duiBiwidth = img.width;
                 duiBiheight = img.height;
             } else {
                 duiBiwidth = 1400;
                 duiBiheight = parseInt((1400 / img.width) * img.height);
                 if (duiBiheight > 800) {
                     duiBiwidth = parseInt((800 / img.height) * img.width);
                     duiBiheight = 800;
                 }
             }
             $("#duiBi").css("width", duiBiwidth);
             $("#duiBi").css("height", duiBiheight);
             $("#duiBi")[0].src = thesrc;
             $("#duiBi")[0].flag = 1;
         }
     }
     $('input[type=range]').val(0);
     $(".xiangXiValue").html("0");
 }
 $("#caiJianTitle").click(function () {
     $("#duiBi").css("display", "none");
     $("#jieTu").css("height", 500);
     $("#jieTu").css("width", 300);
     var canWidth = $("#canvas").css("width");
     canWidth = canWidth.substring(0, canWidth.length - 2);
     var canHeight = $("#canvas").css("height");
     canHeight = canHeight.substring(0, canHeight.length - 2);
     if (500 > canHeight || 300 > canWidth) {
         $("#jieTu").css("height", 300);
         $("#jieTu").css("width", 200);
         $("#jieTu").css("display", "block");
     } else {
         $("#jieTu").css("display", "block");
     }
     var left = $("#canvas").css("left");
     left = left.substring(0, left.length - 2);
     var top = $("#canvas").css("top");
     top = top.substring(0, top.length - 2);
     $("#jieTu").css("left", left + "px");
     $("#jieTu").css("top", top + "px");
 })
 $(document).ready(function () {
     $("#logoimg").change(function (e) {
         readFiles(e)
     });
 });
 $("#daKai").click(function () {
     var tempSrc = canvas.toDataURL("image/png");
     // hostEditor.openFile(tempSrc);
     document.getElementById("logoimg").click();
     arr.length = 0;
     arrBack.length = 0;
     arrWidth.length = 0;
     arrHeight.length = 0;
     arrBackWidth.length = 0;
     arrBackHeight.length = 0;
     $("#canvas").css("left", "8px");
     $("#canvas").css("top", "45px");
 })
 $("#saveHtml").click(function () {
     var tempSrc = canvas.toDataURL("image/png");
     var saveHref = document.getElementById("save_href");
     /*
      * 传入对应想要保存的图片格式的mime类型
      * 常见：image/png，image/gif,image/jpg,image/jpeg
      */
     var tempSrc = canvas.toDataURL("image/png");
     hostEditor.saveSourceImage(tempSrc);
     //saveHref.href = tempSrc;
     //setTimeout(function () { saveHref.click(); }, 200);
 })
 $("#logoimg").change(function () {
     showInfo(this);
 })

 function showInfo(obj) {
     var filename = getFileName(obj);
     var fileext = getFileExt(obj);
     document.getElementById("logoimg").filename = filename;
     document.getElementById("logoimg").fileext = fileext;
     document.getElementById("save_href").download = filename + ".png";
 }

 function getFileName(obj) {
     var pos = obj.value.lastIndexOf(".") * 1;
     return obj.value.substring(0, pos);
 }

 function getFileExt(obj) {
     return obj.value.replace(/.+./, "");
 }
 $("#back").click(function () {
     if (arr.length < 4) {} else {
         arrBack.push(arr.pop());
         arrBack.push(arr.pop());
         arrBackWidth.push(arrWidth.pop());
         arrBackWidth.push(arrWidth.pop());
         arrBackHeight.push(arrHeight.pop());
         arrBackHeight.push(arrHeight.pop());
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         canvas.width = arrWidth[arrWidth.length - 1];
         canvas.height = arrHeight[arrHeight.length - 1];
         if (arr.length > 0) {
             ctx.putImageData(arr[arr.length - 1], 0, 0, 0, 0, arrWidth[arrWidth.length - 1], arrHeight[arrHeight.length - 1]);
         }
         var middle = canvas.toDataURL("image/png");
         $("#middle").html(middle);
         Caman('#canvas', function () {
             this.replaceCanvas(canvas);
         });
     }

 })
 $("#next").click(function () {
     if (arrBack.length != 0) {
         arr.push(arrBack.pop());
         arr.push(arrBack.pop());
         arrWidth.push(arrBackWidth.pop());
         arrWidth.push(arrBackWidth.pop());
         arrHeight.push(arrBackHeight.pop());
         arrHeight.push(arrBackHeight.pop());
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         canvas.width = arrWidth[arrWidth.length - 1];
         canvas.height = arrHeight[arrHeight.length - 1];
         if (arr.length > 0) {
             ctx.putImageData(arr[arr.length - 1], 0, 0, 0, 0, arrWidth[arrWidth.length - 1], arrHeight[arrHeight.length - 1]);
         }
     }
     var middle = canvas.toDataURL("image/png");
     $("#middle").html(middle);
 })
 document.onmouseup = function () {
     arr.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
     arrWidth.push(canvas.width);
     arrHeight.push(canvas.height);
     widthZhuan = canvas.width;
     heightZhuan = canvas.height;
 }

 function getUrlParam(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
     var r = window.location.search.substr(1).match(reg); //匹配目标参数
     if (r != null) return unescape(r[2]);
     return null; //返回参数值
 }
 $("#duiBiBtn").click(function () {
     var a = (parseInt($("section").css("width")) - 30) / 2;
     var duiBiwidth = 0;
     var duiBiheight = 0;
     if ($("#yuan")[0].width > a && $("#yuan")[0].height <= 800) {
         duiBiwidth = a;
         duiBiheight = parseInt((a / $("#yuan")[0].width) * $("#yuan")[0].height);
     } else if ($("#yuan")[0].width <= a && $("#yuan")[0].height > 800) {
         duiBiwidth = parseInt((800 / $("#yuan")[0].height) * $("#yuan")[0].width);
         duiBiheight = 800;
     } else if ($("#yuan")[0].width <= a && $("#yuan")[0].height <= 800) {
         duiBiwidth = $("#yuan")[0].width;
         duiBiheight = $("#yuan")[0].height;
     } else {
         duiBiwidth = a;
         duiBiheight = parseInt((a / $("#yuan")[0].width) * $("#yuan")[0].height);
         if (duiBiheight > 800) {
             duiBiwidth = parseInt((800 / $("#yuan")[0].height) * $("#yuan")[0].width);
             duiBiheight = 800;
         }
     }
     $("#duiBi").css("width", duiBiwidth);
     $("#duiBi").css("height", duiBiheight);
     $("#duiBi")[0].src = $("#yuan")[0].src;
     $("#duiBi")[0].flag = 1;
     if ($("#duiBi")[0].flag1) {
         $("#duiBi").css("display", "none");
         $("#duiBi")[0].flag1 = 0;
     } else if ($("#duiBi")[0].flag) {
         $("#duiBi").css("display", "block");
         $("#duiBi")[0].flag1 = 1;
         $("#canvas").css("left", "8px");
         $("#canvas").css("top", "45px");
         var duiBiwidth = $("#duiBi")[0].width;
         var duiBiheight = $("#duiBi")[0].height;
         chiCun(duiBiwidth, duiBiheight);
     }
 })

 function middleImg() {
     var sectionW = parseInt($("section").css("width")) - 30;
     var sectionH = parseInt($("section").css("height")) - 50;
     var canvasW = parseInt($("#canvas")[0].width);
     var canvasH = parseInt($("#canvas")[0].height);
     var left = (sectionW - canvasW) / 2;
     if (left < 0) {
         left = 0;
     }
     left += "px";
     var top = (sectionH - canvasH) / 2;
     if (top < 0) {
         top = 0;
     }
     top += "px";
     $("#canvas").css("left", left);
     $("#canvas").css("top", top);
 }