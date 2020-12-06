# requiz
HackDuke 2020

## Inspiration
As students looking to improve our study habits in a world of online-learning, we sought to create a simplistic, effective way to retain educational information.

Psychological studies on memory retention have shown that efficient long-term memorization (i.e. for an entire semester) requires regular recall, known as spaced repetition. So, we came up with the idea to reinforce this process by quizzing the user regularly on their study content. We combined many software tools and technologies to resolve our problem and ultimately form our final project, ReQuiz.

## What it does
Throughout the semester, we noticed how often we read articles, textbooks, and papers on our web browsers. So, we created a system to reinforce one’s knowledge acquired from these readings. Via a chrome extension, the user can click a button to archive and eventually be quizzed repeatedly on the content on the page they are viewing. Then, on the ReQuiz web application, the user is notified when they have a quiz ready. This is done via spaced repetition, meaning that the user is quizzed regularly following their study session, but at a decreasing rate (i.e. days 1, 2, 4, 8, 13, 21, 30, etc.). The quizzes, however, for each article, do not always provide the same questions.

## How we built it
### MODEL
To build ReQuiz, we chose to follow a multi-sided approach. The core part of our app relied upon the machine learning model to take a long text file and generate multiple choice questions from it. Using PyTorch and NLTK in Python, we ran a neural net for natural language processing on the text file to generate these questions. To verify the accuracy of the algorithm, we had trained it on a prior dataset of 100,000 questions obtained from a Stanford dataset.

We hosted our question generation model as a Google Cloud Function. This allowed us to reduce our time for model generation, as we did not have to wait for the model to reload every time we wanted to deploy the application.

### BACKEND
For our backend, we used a Flask API. One important POST request endpoint was /genquestion, which would generate the textid and questions from a given text and write these to the database.

Regarding storing this data, we chose to use DataStax Astra since it’s Cassandra-based structure made it great for scaling and easily viewing our data. In using the DataStax database, we connected our Flask API with the GraphQL endpoints they had listed, enabling for many different write and read operations to happen which was especially useful for storing our questions in the database.

### FRONTEND
In order to actually trigger the question generation process, we made a simple and intuitive chrome extension using HTML, CSS, and JavaScript in which a user could login and add the current page to their own personal collection of articles and associated generated questions. This helped the user experience since users can easily save articles without having to navigate away or lose their focus from their current reading.

Finally, for the user to see the questions and get quizzed on them, we built a React app in JavaScript with a RESTfulAPI in Python Flask. The web application has an area for the user to login, upon which they can see a dashboard with all their past articles saved. For each one, they can view the questions that were generated by our algorithm and be quizzed on them. For our user authentication endpoints and for hosting, we used Google Cloud Functions on firebase.

## Challenges we ran into
One initial challenge that we ran into was due to not having our expected team capacity for the project we wanted to do. Due scheduling conflicts, our team size was dramatically reduced on Saturday and we had to quickly adapt and cut features from our app. We’re happy to have created something useful in the given time frame.

Even after transitioning our model to Google Cloud Functions, we struggled to make it execute in a timely manner. This is partially due to having to load a very large model. With longer text files, we had some timeout errors, so we had to limit the number of questions retrieved by the model to 50 in order to prevent this. Nevertheless, we found Google Cloud to be extremely intuitive and useful to streamline our development.

Another challenge that we ran into was that none of us had ever used GraphQL APIs before and were confused about how to implement the DataStax Astra database with our app. We solved this by working together with the HackDuke mentors and reading through all the documentation to connect the parts of our project.

## Accomplishments that we're proud of
As much as we’re proud of the individual technologies and tasks we successfully utilized resolved, we are most proud of the problem we solved for education. We were able to connect all parts of our project together to create a reinforcement learning / spaced repetition system to improve studying. We started off the hackathon as a larger team, but had to adapt due to shifting time commitments of other members. As a result, we’re really proud of the fact that we could put together a working project between the three of us that we would actually use in our own lives and college journey. Regardless of the outcome of the hackathon, we’re happy to have created a project which can have an impact in our lives and hopefully for other students who come across our resource.

## What we learned
We learned how to cooperate effectively in a engineering team and leverage each other's backgrounds to create a finished product which is functional and useful. None of us had a formal background in psychology, but upon learning about the forgetfulness curve in educational psychology, we began thinking about how to integrate that with technology. This type of on-the-spot and interdisciplinary thinking was very helpful for us and also taught us about going outside of our comfort zone in terms of areas of knowledge.

## What's next for ReQuiz
In the future, we are looking to improve our machine learning model and increase scalability. This means that, ultimately, we want our product to be more accessible to a larger range of people to improve their study habits!

Also, we would like to investigate more into psychological methods for efficient memorization. Our current strategy with having recurring quizzes only takes into account standard psychological trends with forgetting information. However, it does not take into account the user’s performance on each quiz to dynamically alter the frequency of quizzes.

Finally, we would like to build a mobile application to go with ReQuiz. That way, the user can be easily notified when new quizzes are ready!
