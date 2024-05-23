INSERT INTO `td-demo`.`department` (`id`, `name`) VALUES (1, '董事办');

INSERT INTO `td-demo`.`department` (`id`, `name`) VALUES (2, '财务部');

INSERT INTO `td-demo`.`department` (`id`, `name`) VALUES (3, '运营部');

INSERT INTO `td-demo`.`department` (`id`, `name`) VALUES (4, '劳务部');

INSERT INTO `td-demo`.`department` (`id`, `name`) VALUES (5, '行政部');

INSERT INTO `td-demo`.`department` (`id`, `name`) VALUES (6, '采购部');

INSERT INTO `td-demo`.`department` (`id`, `name`) VALUES (7, '市场部');

INSERT INTO `td-demo`.`role` (`id`, `name`) VALUES (1, '超级管理员');

INSERT INTO `td-demo`.`role` (`id`, `name`) VALUES (2, '人事经理');

INSERT INTO `td-demo`.`role` (`id`, `name`) VALUES (3, '财务经理');

INSERT INTO `td-demo`.`role` (`id`, `name`) VALUES (4, '运营经理');

INSERT INTO `td-demo`.`role` (`id`, `name`) VALUES (5, '后勤人员');

INSERT INTO `td-demo`.`role` (`id`, `name`) VALUES (7, '出纳员');

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        1,
        '1000',
        '秦始皇',
        1,
        '1',
        '13045678901',
        '123456',
        1,
        1,
        '2024-05-20 11:22:43',
        '2024-05-20 11:46:46'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        2,
        '1001',
        '丁仪',
        1,
        '2',
        '15999901234',
        '123456',
        3,
        1,
        '2024-05-20 11:42:28',
        '2024-05-20 11:46:48'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        3,
        '1002',
        '汪淼',
        1,
        '3',
        '13875231064',
        '123456',
        4,
        0,
        '2024-05-20 11:43:17',
        '2024-05-20 13:37:38'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        12,
        '1003',
        '罗辑',
        1,
        '4',
        '13612346780',
        '123456',
        1,
        1,
        '2024-05-20 11:50:08',
        '2024-05-20 11:50:08'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        13,
        '1004',
        '叶文洁',
        0,
        '1',
        '158999001133',
        '123456',
        2,
        1,
        '2024-05-20 14:23:25',
        '2024-05-20 14:23:25'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        14,
        '1005',
        '冯诺依曼',
        1,
        '3',
        '13534510012',
        '123456',
        4,
        0,
        '2024-05-20 14:25:25',
        '2024-05-20 14:26:09'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        15,
        '1006',
        '墨子',
        1,
        '2',
        '18913562345',
        '123456',
        3,
        1,
        '2024-05-20 14:25:58',
        '2024-05-20 14:25:58'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        16,
        '1007',
        '史强',
        1,
        '4',
        '134232128706',
        '123456',
        5,
        1,
        '2024-05-20 14:26:58',
        '2024-05-20 14:26:58'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        17,
        '1008',
        '牛顿',
        1,
        '2',
        '18706423123',
        '123456',
        3,
        1,
        '2024-05-20 14:29:28',
        '2024-05-20 14:29:28'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        18,
        '1009',
        '章北海',
        1,
        '5',
        '15672131316',
        '123456',
        5,
        1,
        '2024-05-20 14:30:23',
        '2024-05-20 14:30:42'
    );

INSERT INTO
    `employee` (
        `id`,
        `employeeCode`,
        `name`,
        `gender`,
        `dept`,
        `phone`,
        `password`,
        `roleId`,
        `state`,
        `createTime`,
        `updateTime`
    )
VALUES (
        19,
        '1010',
        '程心',
        0,
        '1',
        '18703024343',
        '123456',
        1,
        0,
        '2024-05-20 14:31:27',
        '2024-05-20 15:40:09'
    );