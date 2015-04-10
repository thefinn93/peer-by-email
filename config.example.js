/*
 * This file is part of Peer By Email
 *
 * Peer By Email is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Peer By Email is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Peer By Email.  If not, see <http://www.gnu.org/licenses/>.
 */


exports.imap = {
  host: "imap.seattlemesh.net",
  port: 993,
  secure: true,
  options: {
    secureConnection: true,
    auth: {
      user: "join@hyperboria.network",
      pass: "hunter12"
    }
  }
};
