import React from "react";

import styled from "styled-components";

import { getAlbums } from "../../api/albums";
import Album from "../../components/Album";
import useRequest from "../../hooks/useRequest";

const AlbumsWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Albums = () => {
  const { data: albums, loading, error } = useRequest(getAlbums);

  return (
    <AlbumsWrapper>
      {loading && "loading..."}
      {error && "some error..."}
      {!loading &&
        !error &&
        albums &&
        albums.map((album) => <Album key={album.id} {...album} />)}
    </AlbumsWrapper>
  );
};

export default Albums;