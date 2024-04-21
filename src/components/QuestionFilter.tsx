import { FC, useState } from 'react';

export type Props = {
  setQuestionText: (text: string) => void;
};

export const QuestionFilter: FC<Props> = ({ setQuestionText }) => {
  const [query, setQuery] = useState('');

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs" data-cy="SexFilter"></p>

      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            data-cy="NameFilter"
            type="search"
            className="input"
            placeholder="Search"
            value={query}
            onChange={event => {
              const { value } = event.target;

              setQuery(value);
              setQuestionText(value);
            }}
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>

      <div className="panel-block">
        <button
          onClick={() => {
            setQuery('');
            setQuestionText('');
          }}
          className="button is-link is-outlined is-fullwidth"
        >
          Reset all filters
        </button>
      </div>
    </nav>
  );
};
