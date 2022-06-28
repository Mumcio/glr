import styled from '@emotion/styled';
import { FC, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { LocationContentType } from '../models/content';
import { getUserLocation } from '../services/location-service';
import { ipAddressRegex } from '../utils/validation';
import { LocationContext } from '../views/location/LocationContext';

type LocationSearchFormType = {
  ipaddress: string;
};

const defaultValues = {
  ipaddress: '',
};

const LocationSearchForm: FC<LocationContentType> = ({ gridAreaName }) => {
  const { results, setResults } = useContext(LocationContext);

  const fetchIpAddressDetails = useMutation((ipAddress: string) => getUserLocation(ipAddress));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LocationSearchFormType>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<LocationSearchFormType> = formData => {
    if (formData.ipaddress) {
      fetchIpAddressDetails.mutate(formData.ipaddress, {
        onSuccess: data => {
          setResults([...results, data]);
          reset();
        },
      });
    }
  };

  return (
    <Container style={{ gridArea: gridAreaName }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="sr-only" htmlFor="ipaddress">
          Provide ip address
        </label>
        <input
          type="text"
          placeholder="Pass ip address"
          id="ipaddress"
          {...register('ipaddress', {
            required: 'Ip address is required',
            pattern: {
              value: new RegExp(ipAddressRegex),
              message: 'Please enter correct ip address.',
            },
          })}
        />

        <button type="submit" value="submit">
          search
        </button>

        {errors.ipaddress && <p>{errors.ipaddress.message}</p>}
      </form>
    </Container>
  );
};

export default LocationSearchForm;

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;
