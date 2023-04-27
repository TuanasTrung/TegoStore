import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Collapse, FormGroup, FormControlLabel, Checkbox, useTheme } from '@mui/material';
import TagsList from '../../tagList/TagList';
import { FilterFormStyle } from '../style';
import { FILTER_TYPE, SALARY_DISPLAY_TYPE, GENDER } from '../../../config';

const arySortBy = [
  { value: null, label: 'Tất cả' },
  { value: FILTER_TYPE.FEATURED, label: 'Phổ biến nhất' },
  { value: FILTER_TYPE.LATEST, label: 'Mới nhất' },
  { value: FILTER_TYPE.SALARY, label: 'Lương cao nhất' },
];

const genderOptions = [
  { value: GENDER.MALE, label: 'Nam' },
  { value: GENDER.FEMALE, label: 'Nữ' },
];

const numberFields = [
  'Type',
  'MinSalary',
  'MaxSalary',
  'CurrentUnit',
  'WorkingForms',
  'WorkExperiences',
  'Sex',
  'SalaryDisplayType',
];

const FilterForm = forwardRef(({
  searchForm,
  onChange,
}, ref) => {
  const theme = useTheme();
  const [filters, setFilters] = useState({});
  const _timeoutChange = useRef(null);

  useImperativeHandle(ref, () => ({
    resetFilters: () => {
      setFilters({});
    },
    getFilters: () => {
      return filters;
    },
  }));

  const onChangeFilter = (filterValues = {}, apply = true) => {
    let searchValues = searchForm.current ? searchForm.current.getValues() : {};
    let changedFilters = {
      ...filters,
      ...filterValues,
    };
    if (
      typeof filterValues.SalaryDisplayType !== 'undefined'
      && filterValues.SalaryDisplayType !== SALARY_DISPLAY_TYPE.DETAILED_SALARY
    ) {
      delete changedFilters.MinSalary;
      delete changedFilters.MaxSalary;
    }
    setFilters(changedFilters);

    if (apply) {
      clearTimeout(_timeoutChange.current);
      _timeoutChange.current = setTimeout(() => {
        router.push({
          query: { ...searchValues, ...changedFilters }
        }, undefined, { shallow: true });
      }, 300);

      if (onChange) onChange(changedFilters);
    }
  }

  const renderCheckboxGroup = (field, options) => {
    return (
      <FormGroup sx={{ mb: 2 }}>
        {options.map(opt => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            onChange={e => {
              onChangeFilter({
                [field]: updateCheckboxValues(
                  numberFields.includes(field) ? parseInt(e.target.value) : e.target.value,
                  filters[field]
                )
              });
            }}
            control={
              <Checkbox
                checked={(filters[field] || []).includes(opt.value)}
                sx={{
                  '&.Mui-checked': {
                    color: theme.palette.text.active,
                  },
                }}
              />
            }
            label={opt.label}
          />
        ))}
      </FormGroup>
    )
  }

  return (
    <FilterFormStyle>
      <Collapse title="Sắp xếp theo">
        <TagsList
          tags={arySortBy}
          activeTag={filters.Type ?? null}
          spaceY={16}
          tagProps={{
            border: true,
            onClick: (value) => {
              let typeValues = {
                Type: value,
                SortedFieldName: null,
                SortedDirection: null,
              };
              //TODO
              if (value === JOB_FILTER_TYPE.LATEST) {
                typeValues = {
                  ...typeValues,
                  SortedFieldName: 'CreatedTime',
                  SortedDirection: 1,
                };
              }
              onChangeFilter(typeValues);
            }
          }}
          sx={{ marginBottom: '4px' }}
        />
      </Collapse>

      <Collapse title="Giới tính" borderTop>
        {renderCheckboxGroup('Sex', genderOptions)}
      </Collapse>
    </FilterFormStyle>
  )
})

export default FilterForm
