# Dynatrace working time tracking via Excel spreadsheet

from 2019-04-01 on you'll **need two things**:
- my [**Excel spreadsheet**](./spreadsheet/spreadsheet_template_de_v17.xlsx) v17+ to track your working times easily
- my **bookmarklet** to book your times from the spreadsheet to Timecockpit

## How to

1. create a bookmark in your browser with the following code as location/url (this is the bookmarklet):
```
javascript:void%20function(){var%20e=document.createElement(%22script%22);e.src=%22https://kamilsarelo.github.io/com.dynatrace.timetracking.bookmarklet.js%3Fq=%22+(new%20Date).getTime(),e.type=%22text/javascript%22,e.onreadystatechange=e.onload=function(){var%20t=e.readyState;t%26%26%22loaded%22!==t%26%26%22complete%22!==t%26%26alert(%22could%20not%20load%20bookmarklet%22)},document.head.appendChild(e)}();
```
2. download the latest spreadsheet and migrate your data from the old one (safest way to do this: copy cells in old spreadsheet, paste and cut in Notepad, paste in latest spreadsheet)

3. copy the Timecockpit-prepared strings from the latest spreadsheet:

![](./resouces/spreadsheet.png)

4. click the bookmarklet, it will:
* redirect to Timecockpit if not open yet, but click the bookmarklet again afterwards
* open its own window within Timecockpit

5. paste the copied strings from the spreadsheet into the bookmarklet's window:

![](./resouces/bookmarklet.png)

6. click BOOK and lean back

![](./resouces/timecockpit.png)
