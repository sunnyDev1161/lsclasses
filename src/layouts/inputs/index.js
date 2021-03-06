import React from 'react';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { THEMES } from 'src/constants';
import { inputTheme } from 'src/theme';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  input: inputTheme.input,
  search: { ...inputTheme.input, borderRadius: '30px' },
  icon: inputTheme.icon,
  searchIcon: {
    ...inputTheme.icon,
    position: 'absolute',
    right: '15px',
    top: '15px',
    left: ''
  },
  select: { width: '100%' },
  selectTitle: { fontSize: '9px', color: THEMES.GRAYFONT }
}));

const CustomInput = props => {
  const {
    inputData = [],
    type = '',
    search = {},
    className = '',
    containerClass = '',
    variant = '',
    selectTitle = ''
  } = props;
  const classes = useStyles();
  if (type === 'search') {
    return (
      <>
        <div className={classes.root}>
          <input
            name={search.name}
            onChange={search.onChange}
            type={search.type}
            value={search.value}
            key={search.name + '_' + search.id}
            className={classes.search}
            autoComplete={'off'}
            placeholder={search.placeHolder}
          />
          <i className={`${classes.searchIcon} fas fa-search`} />
        </div>
      </>
    );
  } else {
    return (
      <>
        {inputData && inputData.length > 0
          ? inputData.map((input, index) => {
              if (
                input.type === 'text' ||
                input.type === 'password' ||
                input.type === 'number'
              ) {
                return (
                  <>
                    <div
                      className={
                        variant === 'studentProfile' && index === 0
                          ? classes.root + ' ' + containerClass
                          : classes.root
                      }
                    >
                      <input
                        name={input.name}
                        onChange={input.onChange}
                        type={input.type}
                        value={input.value}
                        disabled={input.disabled}
                        variant="outlined"
                        key={input.name + '_' + input.id}
                        className={classes.input + ' ' + className}
                        autoComplete={'off'}
                        placeholder={input.placeHolder}
                      />
                      {input.icon && (
                        <i className={input.icon + ' ' + classes.icon} />
                      )}
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <p className={classes.selectTitle}>{selectTitle}</p>{' '}
                    <FormControl variant="filled" className={classes.select}>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={input.value}
                        onChange={input.onChange}
                        className={classes.input}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </>
                );
              }
            })
          : ''}
      </>
    );
  }
};

export default CustomInput;
