# Dynatrace working time tracking via Excel spreadsheet

from 2019-04-01 on you'll **need two things**:
- my [**Excel spreadsheet**](./spreadsheet/spreadsheet_template_de_v16.xlsx) v16+ to track your working times easily
- my **bookmarklet** to book your times from the spreadsheet to Timecockpit

## How to create the bookmarklet

1) create a bookmark in your browser with the following code as location/url (this is the bookmarklet):
```
javascript:void%20function(){var%20t=document.createElement(%22script%22);t.src=%22https://kamilsarelo.github.io/com.dynatrace.timetracking.bookmarklet.js%22,t.type=%22text/javascript%22,t.onreadystatechange=t.onload=function(){var%20e=t.readyState;e%26%26%22loaded%22!==e%26%26%22complete%22!==e%26%26alert(%22could%20not%20load%20bookmarklet%22)},document.head.appendChild(t)}();
```

2) click the bookmarklet to use it (will forward to Timecockpit first, in case not open yet)

3) copy Timecockpit-strings from the spreadsheet and paste them into the bookmarklet's window

4) click BOOK
