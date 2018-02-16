
for (i = 17; i < 24; i++) {
   if ($a3.moment > $a2.rows[i].cells[0].value && $a3.moment < $a2.rows[i+1].cells[0].value) {
    greeting = i
} else if ($a3.moment > $a2.rows[24].cells[0].value || $a3.moment < $a2.rows[17].cells[0].value){
    greeting = 26
}
}



$export(null, greeting);
