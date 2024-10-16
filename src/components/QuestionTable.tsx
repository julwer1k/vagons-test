import { useState } from 'react';
import questions from '../api/question.json';
import { QuestionFilter } from './QuestionFilter';

export const QuestionTable = () => {
  const [questionText, setQuestionText] = useState('');

  const sortedQuestions = questions.filter(question => {
    const normalizeQuestionText = questionText.toLowerCase().trim();
    const normalizedQuestion = question.question.toLowerCase().trim();

    return normalizedQuestion.includes(normalizeQuestionText);
  });

  return (
    <div className="block">
      <div className="columns is-desktop is-flex-direction-row-reverse">
        <div className="column is-7-tablet is-narrow-desktop">
          <QuestionFilter setQuestionText={setQuestionText} />
        </div>
        <div className="column">
          <div className="box table-container">
            <table
              data-cy="peopleTable"
              className="table is-striped is-hoverable is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  <th>Питання</th>
                  <th>Відповідь</th>
                  <th>Зображення</th>
                </tr>
              </thead>

              <tbody>
                {sortedQuestions.map(item => {
                  const { question, answer, id, images } = item;
                  const imagesURL = images ? images : '';
                  const isAnswersArray = Array.isArray(answer);

                  return (
                    <tr data-cy="person" key={id}>
                      <td>{question}</td>
                      {isAnswersArray ? (
                        <td>
                          {answer.map(itemAnswer => {
                            return (
                              <>
                                {`• ${itemAnswer}, `}
                                <br />
                              </>
                            );
                          })}
                        </td>
                      ) : (
                        <td>{answer}</td>
                      )}
                      <td>
                        <a href={imagesURL} target="_blank" rel="noreferrer">
                          {imagesURL ? 'Картинка' : ''}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
