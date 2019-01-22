# Team-Project-B2

I. Notes for Prof. Dhrumil:

  Hi Professor Dhrumil,
Thank you for your patience in receiving our final project.  We were finally able to get everything back in place and appropriately     linked.  Below please find a couple of key notes about our files and data.  Please let us know if you have any questions.  You also     mentioned that we should remind you that you were kind enough to grant us an extension to do the Sprint Retrospective before Friday     when we are all in the same place.  Thank you for this, we greatly appreciate your support in finalizing our project. 
  All the best, 
  Team B2 
  
II.Files:  
We worked very hard to structure our folders the way you suggested we should.  Unfortunately, with three of our d3 graphs the original paths that allowed them to function got very disturbed and after immense effort, we were not able to correct them. 
    •	Retweets and Favs d3s (with links from first page): Three teammates (Maria, Victor and Jose) each separately tried to correct the paths and were unsuccessful.  The java script files for these items are in the general folder as US5_Chart 2 and 3.
    •	Migration the Core of Trump’s Tweets and Migration Terms: (Karisma) worked hard to try and create paths within the new file structure, but then the visualizations were not appearing or functioning.  We resolved to leave the java and css for these visualizations in the general folder despite efforts to clean up the folder.  Apologies for not being able to resolve these issues.  We felt it best to submit the project as is and just flag this issue for you. 
    •	Trello: We were unable to rename our B2 board to "User Stories", the board did not give us the options.  Sincere apologies.  The Board named B2 is where are User Stories are that did not get done in B2-Sprint 1 or B2-Sprint 2. 
     •	Other: Jose had a problem operating from his branch, so the last two days (Saturday and Sunday) he worked directly from master at times.
    
III. Data:
The main source of our twitter data is cited and how it was generally manipulated is in the References portion of our website.  

Home page:
We combined two bootstrap templates to create the look of our homepage.  The top portion with the wall is one template, the remainder of the page is another.  
We customized the html, CSS and java of each template to include customized pictures, content and links. These two changes were then brought together into one html (index.html) css and java.  Many of the node/ bootstrap folders in our repository are linked to these templates. 

   Common CSS: 
   Thanks to Prof. Dhrumil’s advice we made a common style. CSS file, that took elements of the home page styling, like the font, and      created classes for labels that would be found in various (headings, subtitles, analysis, etc. pages. Some of these changes shifted      and although we couldn’t apply it to everything in the website, we tried hard to norm as many elements as we could.  
   Data per website section: 

A.Trump and the Wall (Two graphs in Excel): Twitter data from the repository listed in our references, was manipulated using pivot         tables with excel, and researching different combinations. 
Notes: 
1.	I downloaded the data of Trump's tweets in csv version directly from  trumptwitterarchive.com/archive. 
2.	I opened the csv files in excel 
3.	I separated the dates using the functions "MONTH" and "YEAR"
4.	I created pivot tables (months as columns and count as row). From these I was able to calculate the frequency of tweets related to the wall and other migration related terms.
5.	For other graphs, I repeated the same steps but chose the sum of "favs" or "retweets" as rows in the pivot tables.

B. Migration Terms (d3):   
Notes: 	For the user story 3 where the major task was visualizing the frequency of words related to migration, we employed the following methods:
1.	Downloaded the data i.e all the tweets (range June 2015 to present day) from trumptwitterarchive.com/archive, as described in our methodology in the references section.   
2.	Further researched the most commonly used words related to migration. 
3.	We included words like "migr", "Mexico", "DACA", "alien", "Caravan" and "border".  
4.	We then excluded the retweets from Trump's twitter account and purely focused on original tweets sent out.  
5.	We then made a frequency table for each of these terms and saved the dataset within the .js file.

C. The Wall In Context (d3): 
Notes: 
1.	Our twitter data was converted to a CSV. 
2.	I wrote a python JSON converter to convert the CSV to JSON.  
3.	The D3 visualization took JSON formatted data. The html called for the JSON to be in the same file, although Ori and I went through a process of removing it, it effected the outcome too greatly and we decided to keep the JSON formatted data in the html.  

D. Retweets and Favs(CSV):   
Notes: Data manipulation process in references. 
1.	I downloaded the data of Trump's tweets in csv version directly from  trumptwitterarchive.com/archive. 
2.	I opened the csv files in excel 
3.	Then I applied the filter from A to Z to order the data from the highest to the lowest number of  Retweets.
4.	I took the first 10 results. 
5.	We analyzed and captured part of the data to come up with three relevant visualizations. 

E. Migration: The Core of Trump’s Tweets (d3)
Notes:	
1.	The data was directly copy and pasted from excel or hand typed because of the dual axis graph.
2.	It was then replaced the d3’s corresponding js file.  

Top Ten Retweets (html):  
Notes: 
6.	I downloaded the data of Trump's tweets in csv version directly from  trumptwitterarchive.com/archive. 
7.	I opened the csv files in excel 
8.	Then I applied the filter from A to Z to order the data from the highest to the lowest number of  Retweets.
9.	I took the first 10 results. 

