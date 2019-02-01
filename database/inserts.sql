/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

INSERT INTO EventType
VALUES (1, 'Register'),
       (2, 'Login');

INSERT INTO Hosts
VALUES (1, 'github.com', 'GitHub'),
       (2, 'behance.net', 'Behance'),
       (3, 'twitter.com', 'Twitter'),
       (4, 'instagram.com', 'Instagram'),
       (5, 'codepen.io', 'CodePen');

INSERT INTO Boards (Name)
VALUES ('help'),
       ('debug'),
       ('random'),
       ('memes'),
       ('biz')
