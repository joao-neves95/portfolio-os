/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

-- TABLES:
SET TIME ZONE 'UTC';

CREATE TABLE Users (
    Id SERIAL PRIMARY KEY,
    Email VARCHAR(100) NOT NULL DEFAULT '',
    Github_Id VARCHAR(255) DEFAULT '',
    Google_Id VARCHAR(255) DEFAULT (''),
    CreateDate TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (NOW() at time zone 'UTC'),
    LastLogin TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (NOW() at time zone 'UTC'),
    Name VARCHAR(100) NOT NULL DEFAULT '',
    Summary TEXT NOT NULL DEFAULT ''
);

CREATE TABLE EventType (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(50) NOT NULL
);

CREATE TABLE UserEvents (
    Id SERIAL PRIMARY KEY,
    UserId INT NOT NULL REFERENCES Users(Id),
    EventId INT NOT NULL REFERENCES EventType(Id),
    IP CIDR NOT NULL,
    Datestamp TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (NOW() at time zone 'UTC')
);

CREATE TABLE SkillSet (
    Id SERIAL PRIMARY KEY,
    UserId INT NOT NULL REFERENCES Users(Id),
    Name VARCHAR(100) NOT NULL
);

CREATE TABLE Hosts (
    Id SERIAL PRIMARY KEY,
    Url VARCHAR(50) UNIQUE NOT NULL,
    Label VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE SocialLinks (
    Id SERIAL PRIMARY KEY,
    UserId INT NOT NULL REFERENCES Users(Id),
    HostId INT NOT NULL REFERENCES Hosts(Id),
    UrlPath VARCHAR(100) NOT NULL
);

CREATE TABLE App (
    Id SERIAL PRIMARY KEY,
    UserId INT NOT NULL REFERENCES Users(Id),
    Name VARCHAR(50) UNIQUE NOT NULL,
    Description TEXT DEFAULT (''),
    HtmlIndexUrl VARCHAR(500) NOT NULL,
    Rating INT NOT NULL DEFAULT 0,
    CreationDate TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (NOW() at time zone 'UTC'),
    LastUpdateDate TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (NOW() at time zone 'UTC'),
    IconUrl VARCHAR(1000) NULL DEFAULT NULL
);

CREATE TABLE AppRating (
    Id SERIAL PRIMARY KEY,
    UserId INT NOT NULL REFERENCES Users(Id),
    AppId INT NOT NULL REFERENCES App(Id),
    Datestamp TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (NOW() at time zone 'UTC'),
    IsUpVote BOOLEAN NOT NULL
);

CREATE TABLE AppDownloads (
    Id SERIAL PRIMARY KEY,
    UserId INT NOT NULL REFERENCES Users(Id),
    AppId INT NOT NULL REFERENCES App(Id)
);

CREATE TABLE FS_Local (
    Id SERIAL PRIMARY KEY,
    UserId INT UNIQUE NOT NULL REFERENCES Users(Id),
    DIR_desktop TEXT[] NOT NULL DEFAULT (ARRAY[]::TEXT[]),
    DIR_documents TEXT[] NOT NULL DEFAULT (ARRAY[]::TEXT[]),
    DIR_music TEXT[] NOT NULL DEFAULT (ARRAY[]::TEXT[]),
    DIR_images TEXT[] NOT NULL DEFAULT (ARRAY[]::TEXT[]),
    DIR_videos TEXT[] NOT NULL DEFAULT (ARRAY[]::TEXT[]),
    DIR_shared TEXT[] NOT NULL DEFAULT (ARRAY[]::TEXT[])
);

CREATE TABLE Boards (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(50) NOT NULL
);

CREATE TABLE Threads (
    Id SERIAL PRIMARY KEY,
    BoardId INT NOT NULL REFERENCES Boards(Id),
    UserId INT NOT NULL REFERENCES Users(Id),
    Message TEXT NOT NULL,
    CreateDate TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (NOW() at time zone 'UTC'),
    IsClosed BOOLEAN NOT NULL DEFAULT FALSE,
    IsPinned BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE Replies (
    Id SERIAL PRIMARY KEY,
    ThreadId INT NOT NULL REFERENCES Threads(Id),
    UserId INT NOT NULL REFERENCES Users(Id),
    Message TEXT NOT NULL,
    CreateDate TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (NOW() at time zone 'UTC')
);

-- INDEXES:
CREATE INDEX Github_Id_Users_Idx
ON Users(Github_Id);

CREATE INDEX Google_Id_Users_Idx
ON Users(Google_Id);

CREATE INDEX UserId_UserEvents_Idx
ON UserEvents(UserId);

CREATE INDEX UserId_SocialLinks_Idx
ON SocialLinks(UserId);

CREATE INDEX UserId_FS_Local_Idx
ON FS_Local(UserId);

CREATE INDEX UserId_AppDownloads_Idx
ON AppDownloads(UserId);

CREATE INDEX AppId_AppDownloads_Idx
ON AppDownloads(AppId);

CREATE INDEX BoardId_Threads_Idx
ON Threads(BoardId);

CREATE INDEX ThreadId_Replies_Idx
ON Replies(ThreadId);
